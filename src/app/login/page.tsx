'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Botao from '@/componentes/botao'
import CamposDeTexto from '@/componentes/camposDeTexto'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const { login, isAuthenticated } = useAuth()
  const router = useRouter()

  // Redirecionar se já estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router]) //Toda vez que o estado de algo que estiver dentro do [] mudar ele executa o userEffect

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!email || !password) {
      setError('Preencha todos os campos')
      setIsLoading(false)
      return
    }

    try {
      const success = await login(email, password)
      
      if (success) {
        router.push('/')
      } else {
        setError('Email ou senha inválidos')
      }
    } catch (error) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-black rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Faça login em sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-white">
            Sistema CRUD
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <CamposDeTexto
              label="Email"
              type="email"
              value={email}
              aoAlterado={(e: string) => setEmail(e)}
              required
            />
            <CamposDeTexto
              label="Senha"
              type="password"
              value={password}
              aoAlterado={(e: string) => setPassword(e)}
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <div className="text-center">
            <Botao
              name={isLoading ? "Entrando..." : "Entrar"}
              onClick={handleSubmit}
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
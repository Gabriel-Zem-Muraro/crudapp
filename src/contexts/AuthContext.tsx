'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/services/userService'

interface User {
  id: number;
  name: string;
  idade: number;
  email: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

interface TipoTokenReturn {
  access_token: string;
  user: User //Referencia a interface user e os tipos dela
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Verificar se há um token no localStorage ao carregar a aplicação
    const token = localStorage.getItem('authToken')
    const userData = localStorage.getItem('userData')
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error)
        localStorage.removeItem('authToken')
        localStorage.removeItem('userData')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Aqui você faria a chamada real para sua API de login
      // Por enquanto, vou simular uma autenticação
      const apiReturn = await api.post<TipoTokenReturn>('/auth/login', {email, password})
      const {access_token, user:userData} = apiReturn.data //O token vai para o access_token e o resto vai para o userData
      //os : pega tudo que está em user e joga dentro de userData
      
      setUser(userData)
      localStorage.setItem('authToken', access_token)
      localStorage.setItem('userData', JSON.stringify(userData))
        
        return true
    } catch (error) {
      console.error('Erro no login:', error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
    router.push('/login')
  }

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}

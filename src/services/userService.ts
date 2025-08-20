import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userService = {
  // GET /user/:id - Buscar usuário por ID
  getById: async (id: number) => {
    const response = await api.get(`/user/${id}`);
    return response.data;
  },

  // GET /user?isActived=boolean - Buscar todos os usuários
  getAll: async (isActived: boolean = true) => {
    const response = await api.get(`/user?isActived=${isActived}`);
    return response.data;
  },

  // POST /user - Criar novo usuário
  create: async (userData: any) => {
    const response = await api.post('/user', userData);
    return response.data;
  },

  // PUT /user/:id - Atualizar usuário completo
  update: async (id: number, userData: any) => {
    const response = await api.put(`/user/${id}`, userData);
    return response.data;
  },

  // PATCH /user/:id - Atualizar usuário parcial
  updatePartial: async (id: number, userData: any) => {
    const response = await api.patch(`/user/${id}`, userData);
    return response.data;
  },

  // DELETE /user - Deletar usuário (ID no body)
  delete: async (id: number) => {
    const response = await api.delete('/user', {
      data: { id }  // ID vai no body, não na URL
    });
    return response.data;
  }
};
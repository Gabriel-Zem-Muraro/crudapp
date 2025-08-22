import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar automaticamente o token de autenticação
api.interceptors.request.use(
  (config) => {
    // Pegar o token do localStorage
    const token = localStorage.getItem('authToken');
    
    if (token) {
      // Adicionar o token ao cabeçalho Authorization
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para lidar com erros de resposta (opcional)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Se receber 401 (não autorizado), limpar o token e redirecionar para login
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

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

export { api };
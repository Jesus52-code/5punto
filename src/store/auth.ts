import { create } from 'zustand';

interface User {
  username: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  users: User[];
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, email: string, password: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  user: null,
  users: [{ username: 'admin', email: 'admin@example.com' }],
  login: async (username: string, password: string) => {
    const users = get().users;
    const user = users.find(u => u.username === username);
    
    if (username === 'admin' && password === 'admin' || (user && password === password)) {
      set({ isAuthenticated: true, user: { username, email: user?.email || 'admin@example.com' } });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => set({ isAuthenticated: false, user: null }),
  register: async (username: string, email: string, password: string) => {
    const users = get().users;
    if (users.some(u => u.username === username)) {
      throw new Error('Username already exists');
    }
    if (users.some(u => u.email === email)) {
      throw new Error('Email already exists');
    }
    set(state => ({
      users: [...state.users, { username, email }]
    }));
  }
}));
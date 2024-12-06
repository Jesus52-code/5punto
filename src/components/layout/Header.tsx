import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          Bloc de Notas - {user?.username}
        </h1>
        <Button
          variant="ghost"
          className="flex items-center text-gray-600 hover:text-gray-900"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Cerrar Sesión
        </Button>
      </div>
    </header>
  );
};
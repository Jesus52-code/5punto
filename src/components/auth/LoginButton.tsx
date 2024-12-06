import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Sword } from 'lucide-react';

export const LoginButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="bleach"
      className="fixed top-4 left-4 font-semibold"
      onClick={() => navigate('/login')}
    >
      <Sword className="mr-2 h-4 w-4" />
      Login
    </Button>
  );
};
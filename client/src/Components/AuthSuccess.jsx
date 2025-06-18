import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthSuccess = () => {
  const navigate = useNavigate();
  const { checkAuthStatus } = useAuth();

  useEffect(() => {
    // Handle the OAuth callback
    const handleCallback = async () => {
      await checkAuthStatus();
      navigate('/home');
    };

    handleCallback();
  }, [navigate, checkAuthStatus]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column' 
    }}>
      <h2>Signing you in...</h2>
      <p>Please wait while we complete your login.</p>
    </div>
  );
};

export default AuthSuccess;
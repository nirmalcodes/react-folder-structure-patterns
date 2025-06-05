import { type FC } from 'react';
import LoginForm from '@/features/auth/components/LoginForm';

const LoginPage: FC = () => {
  return (
    <div
      style={{
        padding: '16px',
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
      }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;

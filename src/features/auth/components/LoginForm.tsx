import { useState, type FC, type MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../validation/loginSchema';
import { login } from '../services/authService';
import type { LoginFormData } from '../types/auth';

const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => e.preventDefault();
  const handleMouseUpPassword = (e: MouseEvent<HTMLButtonElement>) => e.preventDefault();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <div
      style={{
        padding: '32px',
        maxWidth: '400px',
        margin: '64px auto',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '4px' }}>
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '14px',
              borderRadius: '4px',
              border: `1px solid ${errors.email ? 'red' : '#ccc'}`,
            }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</span>}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '4px' }}>
            Password
          </label>
          <div style={{ position: 'relative' }}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              style={{
                width: '100%',
                padding: '8px 36px 8px 8px',
                fontSize: '14px',
                borderRadius: '4px',
                border: `1px solid ${errors.password ? 'red' : '#ccc'}`,
              }}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.password && <span style={{ color: 'red', fontSize: '12px' }}>{errors.password.message}</span>}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

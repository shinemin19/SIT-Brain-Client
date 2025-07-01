// import { useMutation } from '@tanstack/react-query';
// import { authService } from '../services/authService';
// import type { SignInRequest, SignInResponse, ApiError } from '../types/auth';
// import { useNavigate } from 'react-router-dom';

// export const useSignIn = () => {
//   const navigate = useNavigate();
  
//   return useMutation<SignInResponse, ApiError, SignInRequest>({
//     mutationFn: authService.signIn,
//     onSuccess: (data) => {
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user', JSON.stringify(data.user));
//       navigate('/'); // Redirect to home after login
//     },
//     onError: (error) => {
//       console.error('Sign in failed:', error);
//     },
//   });
// };

// export const useMicrosoftSignIn = () => {
//   const navigate = useNavigate();
  
//   return useMutation<void, ApiError, void>({
//     mutationFn: () => {
//       authService.signInWithMicrosoft();
//       return Promise.resolve();
//     },
//     onSuccess: () => {
//       // The actual success will be handled in the callback page
//     },
//     onError: (error) => {
//       console.error('Microsoft sign in failed:', error);
//     },
//   });
// };

// export const useHandleMicrosoftCallback = () => {
//   const navigate = useNavigate();
  
//   return useMutation<SignInResponse, ApiError, void>({
//     mutationFn: () => {
//       try {
//         const result = authService.handleCallback();
//         return Promise.resolve(result);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     },
//     onSuccess: (data) => {
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user', JSON.stringify(data.user));
//       navigate('/'); // Redirect to home after login
//     },
//     onError: (error) => {
//       console.error('Microsoft callback failed:', error);
//       navigate('/login', { state: { error: error.message } });
//     },
//   });
// };

import { useMutation } from '@tanstack/react-query';
import { authService } from '../services/authService';
import type { ApiError } from '../types/auth';
import { useNavigate } from 'react-router-dom';

import type { SignInResponse } from '../types/auth';

export const useSignIn = () => {
  const navigate = useNavigate();
  
  return useMutation<SignInResponse, ApiError, { email: string; username: string; password: string }>({
    mutationFn: (credentials) => authService.signIn(credentials),
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/home'); // Redirect to home after login
    },
    onError: (error) => {
      console.error('Sign in failed:', error);
      navigate('/signin', { state: { error: error.message } });
    },
  });
};

export const useMicrosoftSignIn = () => {
  const navigate = useNavigate();
  
  return useMutation<void, ApiError, void>({
    mutationFn: () => {
      authService.signInWithMicrosoft();
      return Promise.resolve();
    },
    onError: (error) => {
      console.error('Microsoft redirect failed:', error);
      navigate('/signin', { state: { error: error.message } });
    },
  });
};
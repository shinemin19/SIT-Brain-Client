import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract parameters from URL
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const error = params.get('error');

    // 1. Validate Microsoft response
    if (error) {
      console.error(`Microsoft login failed: ${error}`);
      navigate('/signin', { 
        replace: true,
        state: { error: `Login failed: ${params.get('error_description') || error}` }
      });
      return;
    }

    // // 2. Verify required parameters exist
    // if (!code || !state) {
    //   console.error('Missing required parameters:', { code, state });
    //   navigate('/signin', { 
    //     replace: true,
    //     state: { error: 'Authentication failed: Missing required parameters' }
    //   });
    //   return;
    // }

    // 3. Validate state parameter (security check)
    const storedState = localStorage.getItem('oauth_state');
    if (state !== storedState) {
      console.error('State mismatch:', { storedState, receivedState: state });
      navigate('/signin', { 
        replace: true,
        state: { error: 'Security validation failed' }
      });
      return;
    }

    // 4. Cleanup and redirect
    localStorage.removeItem('oauth_state');
    window.history.replaceState({}, document.title, window.location.pathname);
    
    console.log('Microsoft login successful! Code:', code);
    navigate('/home', { replace: true });
    
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Verifying Microsoft login...</h2>
        <p className="mt-2 text-gray-600">You'll be redirected shortly</p>
      </div>
    </div>
  );
}
// // APPROACH 1: Direct redirect to Microsoft (Most Common & Standard)
// // Frontend constructs Microsoft OAuth URL directly and redirects

import type { SignInRequest, SignInResponse } from "../types/auth";

// import type { SignInRequest, SignInResponse } from "../types/auth";

// const API_BASE_URL = "http://localhost:3000/api";

// // Microsoft OAuth configuration (public info, safe to expose)
// const MICROSOFT_CONFIG = {
//   clientId: "0993ce0d-3362-4eaa-be01-813386e934d2", // Public client ID - safe to expose
//   authority:
//     "https://login.microsoftonline.com/6f4432dc-20d2-441d-b1db-ac3380ba633d", // tenant ID, kmutt domain only
//   redirectUri: window.location.origin + "/auth/callback", // Your callback page
//   scopes: ["openid", "profile", "email", "User.Read"],
// };

// export const authService = {
//   // Regular sign in - validate credentials via backend
//   signIn: async (credentials: SignInRequest): Promise<SignInResponse> => {
//     const response = await fetch(`${API_BASE_URL}/auth/signin`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         ...credentials,
//         provider: "microsoft",
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw {
//         message: errorData.message || "Microsoft authentication failed",
//         status: response.status,
//         code: errorData.code,
//       };
//     }

//     return response.json();
//   },

//   // STANDARD APPROACH: Direct redirect to Microsoft
//   signInWithMicrosoft: (): Promise<SignInResponse> => {
//     return new Promise((resolve, reject) => {
//       const state = generateState();

//       // Store the promise resolvers so the callback can access them
//       const authPromise = { resolve, reject };
//       sessionStorage.setItem(
//         "oauth_promise",
//         JSON.stringify({
//           state,
//           timestamp: Date.now(),
//         })
//       );

//       // Store state for security verification
//       localStorage.setItem("oauth_state", state);

//       const params = new URLSearchParams({
//         client_id: MICROSOFT_CONFIG.clientId,
//         response_type: "code",
//         redirect_uri: MICROSOFT_CONFIG.redirectUri,
//         scope: MICROSOFT_CONFIG.scopes.join(" "),
//         state: state,
//         response_mode: "query",
//         prompt: "select_account",
//       });

//       // Redirect to Microsoft
//       window.location.href = `${MICROSOFT_CONFIG.authority}/oauth2/v2.0/authorize?${params}`;
//     });
//   },

//   // Updated handleCallback to work with the promise-based approach
//   handleCallback: async (
//     code: string,
//     state: string
//   ): Promise<SignInResponse> => {
//     // Verify state parameter
//     const storedState = localStorage.getItem("oauth_state");
//     if (state !== storedState) {
//       throw new Error("Invalid state parameter - possible CSRF attack");
//     }
//     localStorage.removeItem("oauth_state");

//     // Send authorization code to backend to exchange for tokens
//     const response = await fetch(`${API_BASE_URL}/auth/microsoft/callback`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ code, state }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw {
//         message: errorData.message || "OAuth callback failed",
//         status: response.status,
//         code: errorData.code,
//       };
//     }

//     const result = await response.json();

//     // Clean up stored promise data
//     sessionStorage.removeItem("oauth_promise");

//     return result;
//   },

//   // Alternative: Popup approach (also direct to Microsoft)
//   signInWithMicrosoftPopup: (): Promise<SignInResponse> => {
//     return new Promise((resolve, reject) => {
//       const state = generateState();
//       const params = new URLSearchParams({
//         client_id: MICROSOFT_CONFIG.clientId,
//         response_type: "code",
//         redirect_uri: MICROSOFT_CONFIG.redirectUri,
//         scope: MICROSOFT_CONFIG.scopes.join(" "),
//         state: state,
//         response_mode: "query",
//         prompt: "select_account",
//       });

//       // Direct popup to Microsoft - NO backend API involved
//       const popup = window.open(
//         `${MICROSOFT_CONFIG.authority}/oauth2/v2.0/authorize?${params}`,
//         "microsoftAuth",
//         "width=500,height=600,scrollbars=yes,resizable=yes"
//       );

//       // Monitor popup for completion
//       const checkClosed = setInterval(() => {
//         if (popup?.closed) {
//           clearInterval(checkClosed);
//           reject(new Error("Authentication cancelled by user"));
//         }
//       }, 1000);

//       // Listen for success message from popup
//       const messageHandler = (event: MessageEvent) => {
//         if (event.origin !== window.location.origin) return;

//         if (event.data.type === "OAUTH_SUCCESS") {
//           clearInterval(checkClosed);
//           popup?.close();
//           window.removeEventListener("message", messageHandler);

//           // Exchange code for tokens via backend
//           authService
//             .handleCallback(event.data.code, event.data.state)
//             .then(resolve)
//             .catch(reject);
//         } else if (event.data.type === "OAUTH_ERROR") {
//           clearInterval(checkClosed);
//           popup?.close();
//           window.removeEventListener("message", messageHandler);
//           reject(new Error(event.data.error));
//         }
//       };

//       window.addEventListener("message", messageHandler);
//     });
//   },
// };

// // Helper function to generate secure random state
// function generateState(): string {
//   const array = new Uint32Array(4);
//   crypto.getRandomValues(array);
//   return Array.from(array, (dec) => dec.toString(16)).join("");
// }

// // APPROACH 2: Backend-mediated redirect (Less common, but has uses)
// export const authServiceWithBackendRedirect = {
//   // When you might want backend to handle redirect URL generation:
//   signInWithMicrosoft: async (): Promise<void> => {
//     // Get the OAuth URL from your backend
//     const response = await fetch(`${API_BASE_URL}/auth/microsoft/url`, {
//       method: "GET",
//     });

//     if (!response.ok) {
//       throw new Error("Failed to get OAuth URL");
//     }

//     const { authUrl } = await response.json();
//     window.location.href = authUrl;
//   },

//   // Alternative: Popup-based OAuth (if you prefer popup over redirect)
//   signInWithMicrosoftPopup: async (): Promise<SignInResponse> => {
//     const response = await fetch(
//       `${API_BASE_URL}/auth/microsoft/url?popup=true`
//     );
//     const { authUrl } = await response.json();
//     return new Promise((resolve, reject) => {
//       const popup = window.open(
//         authUrl,
//         "auth",
//         "width=500,height=600,scrollbars=yes,resizable=yes"
//       );

//       // Listen for popup completion
//       const checkClosed = setInterval(() => {
//         if (popup?.closed) {
//           clearInterval(checkClosed);
//           reject(new Error("Authentication cancelled by user"));
//         }
//       }, 1000);

//       // Listen for authentication result
//       const messageHandler = (event: MessageEvent) => {
//         if (event.origin !== window.location.origin) return;

//         if (event.data.type === "MICROSOFT_AUTH_SUCCESS") {
//           clearInterval(checkClosed);
//           popup?.close();
//           window.removeEventListener("message", messageHandler);
//           resolve(event.data.payload);
//         } else if (event.data.type === "MICROSOFT_AUTH_ERROR") {
//           clearInterval(checkClosed);
//           popup?.close();
//           window.removeEventListener("message", messageHandler);
//           reject(
//             new Error(event.data.error || "Microsoft authentication failed")
//           );
//         }
//       };

//       window.addEventListener("message", messageHandler);
//     });
//   },
// };


// Microsoft OAuth configuration
const MICROSOFT_CONFIG = {
  clientId: "0993ce0d-3362-4eaa-be01-813386e934d2",
  authority: "https://login.microsoftonline.com/6f4432dc-20d2-441d-b1db-ac3380ba633d",
  redirectUri: window.location.origin + "/auth/callback",
  scopes: ["openid", "profile", "email", "User.Read"],
};

export const authService = {
  signIn: async (credentials: SignInRequest): Promise<SignInResponse> => {
    const response = await fetch("http://localhost:3000/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...credentials,
        provider: "microsoft",
      }),
    }); 
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw {
        message: errorData.message || "Microsoft authentication failed",
        status: response.status,
        code: errorData.code,
      };
    }
    return response.json();
  },
  /**
   * Redirect to Microsoft for authentication
   */
  signInWithMicrosoft: (): void => {
    // Generate and store state for security validation
    const state = Math.random().toString(36).substring(2, 15) + 
                  Math.random().toString(36).substring(2, 15);
    localStorage.setItem("oauth_state", state);

    // Build Microsoft OAuth URL
    const authUrl = new URL(`${MICROSOFT_CONFIG.authority}/oauth2/v2.0/authorize`);
    
    authUrl.searchParams.append("client_id", MICROSOFT_CONFIG.clientId);
    authUrl.searchParams.append("response_type", "code");
    authUrl.searchParams.append("redirect_uri", MICROSOFT_CONFIG.redirectUri);
    authUrl.searchParams.append("scope", MICROSOFT_CONFIG.scopes.join(" "));
    authUrl.searchParams.append("state", state);
    authUrl.searchParams.append("prompt", "select_account");

    // Redirect to Microsoft
    window.location.href = authUrl.toString();
  },
};
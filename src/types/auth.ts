export interface SignInRequest {
  email: string;
  username: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    name?: string;
  };
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

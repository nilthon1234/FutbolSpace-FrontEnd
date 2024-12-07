export interface LoginRequest {
    email?:    string;
    password?: string;
    dni?: number;
};

export interface LoginResponse {
    success?: string;
    error?: string;
    not_access?: string;
  }
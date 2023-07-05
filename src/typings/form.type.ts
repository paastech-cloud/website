export interface RegisterFormType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface LoginFormType {
  email: string;
  password: string;
  rememberMe: boolean;
}

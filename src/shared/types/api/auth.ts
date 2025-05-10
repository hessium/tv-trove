import type { UserProps } from '@/shared/types/api/user';

export interface AuthLoginProps {
  password: string;
  username: string;
}

export interface AuthLoginResponse {
  accessToken: string;
  user: UserProps;
}

export interface AuthRegisterProps {
  email: string;
}



export interface AuthSendCodeProps {
  code: number;
  email: string;
}

export interface AuthSendCodeResponse {
  message: string;
  success: boolean;
}

export interface AuthRegisterResponse {
  email: string;
  sendCodeEmail: boolean;
}

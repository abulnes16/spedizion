export {};

declare global {
  interface AuthContext {
    isLogin: boolean;
    user: string;
    login: () => void;
  }
}

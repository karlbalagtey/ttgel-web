export interface LoginFormState {
  user: any;
  loading: boolean;
  error?: null;
  isAuth: boolean;
  isRefreshing: boolean;
  expiresIn: number | null;
}

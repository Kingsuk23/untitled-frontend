export type response_helper_props<T> = {
  res: Response;
  status_code: number;
  name: string;
  message: string | unknown;
  data?: T[];
  error?: unknown;
};

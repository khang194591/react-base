import "axios";

declare module "axios" {
  export interface AxiosResponse<T> {
    config: InternalAxiosRequestConfig;
    data: T;
    headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
    status: number;
    statusText: string;

    success?: boolean;
    message?: string;
  }
}

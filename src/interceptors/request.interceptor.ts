// src/interceptors/request.interceptor.ts
import { InternalAxiosRequestConfig } from "axios";

export function RequestInterceptorFulfilled(
  config: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> {
  // console.log("REQUEST INTERCEPTOR FULFILLED");
  return config;
}

export function RequestInterceptorRejected(error: any): any {
  // console.log("REQUEST INTERCEPTOR REJECTED");
  return Promise.reject(error);
}

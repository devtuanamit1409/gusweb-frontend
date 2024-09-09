import axios, { AxiosInstance } from "axios";

import {
  RequestInterceptorFulfilled,
  RequestInterceptorRejected,
} from "../interceptors/request.interceptor";
import {
  ResponseInterceptorFulfilled,
  ResponseInterceptorRejected,
} from "../interceptors/response.interceptor";

class ApiService {
  private axios: AxiosInstance;
  constructor() {
    const token = process.env.DEV_TOKEN;
    // console.log(token);

    this.axios = axios.create({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    this.axios.interceptors.request.use(
      RequestInterceptorFulfilled,
      RequestInterceptorRejected
    );
    this.axios.interceptors.response.use(
      ResponseInterceptorFulfilled,
      ResponseInterceptorRejected
    );
  }

  post<T>(endpoint: string, data: unknown) {
    return this.axios.post<T>(endpoint, data).then((response) => response.data);
  }

  get<T>(endpoint: string, params: { [key: string]: unknown } = {}) {
    return this.axios
      .get<T>(endpoint, { params: params })
      .then((response) => response.data);
  }
}
const apiService = new ApiService();
export { apiService };

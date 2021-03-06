import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ApiError =
  | AxiosResponse
  | (AxiosRequestConfig & { status?: number });

const instance = axios.create({
  baseURL: 'https://picsum.photos',
  timeout: 1000,
});

export default instance;

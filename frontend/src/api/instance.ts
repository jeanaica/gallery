import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ApiError =
  | AxiosResponse
  | (AxiosRequestConfig & { status?: number });

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});

export default instance;

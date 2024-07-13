import Axios from "axios";
import { env } from "./env.config";
import { parseCookies } from "nookies";

const { "nodetest.token": token } = parseCookies();

export const axios = Axios.create({
    baseURL: `${env.VITE_BASE_URL}/api`,
    timeout: 10000,
    withCredentials: true,
});

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
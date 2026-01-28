import { custemStorage } from "@/utils";
import axios from "axios";

const instance = () => {
    const init = axios.create({
        baseURL: '/api',
        headers: { 'Content-Type': 'application/json' }
    });
    init.interceptors.request.use((config:any) => {
        config.headers['X-User-Password'] = custemStorage.local.get('auth');
        return config;
    });
    return init;
};

export const custemAxios = instance();
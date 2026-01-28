import { create } from "zustand"
import { custemAxios } from "../aixos/custem";
import { custemStorage } from "../custemStorage";
import axios from "axios";


export interface authProp {
    state: boolean | undefined,
    message: string,
    init?: ()=> void,
    fetch?: (
        params?: {
            password?: string
        }
    ) => Promise<void>,
};

export const useAuth = create<authProp & { password: () => string }>((set,get) => ({
    state: undefined,
    message: `auth error`,
    password: () => custemStorage.local.get(`auth`, ``),
    init: ()=>{
        custemStorage.local.set(`auth`,``);
        set(() => ({ 
            state: false,
            message:`auth error`,
        }));
    },
    fetch: async ({ password } = {}) => {
        let result: boolean = false;
        set({ state: undefined, message: 'auth loding...' });
        try {
            const response = await axios.post(
                '/api',
                { password: password, },
                { headers: { 'Content-Type': 'application/json', } }
            );
            if (response.status === 200) {
                custemStorage.local.set(`auth`, password);
                result = true;
            }
        }
        catch (e) { console.log(e); }
        set(() => ({ state: result }));
    }
}))

export const useLoaAuth = create<authProp>((set) => ({
    state: undefined,
    message: `lostArk API error`,
    init: async () => {
        let result: boolean = false;
        try {
            const response = await custemAxios.get(`/loa`);
            if (response.status === 200) { result = true; }
        }
        catch (e) { }
        set(() => ({ state: result }));
    }
}));
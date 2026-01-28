import axios from "axios";
import { CustomError, CustomResponse, isPassword, passwordError } from "../props";

export const lostArkApi = {
    init: async () => {
        try {
            const response = await axios.get(
                `${process.env.LOSTARK_API_BASE}/exmaple/api`,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `bearer ${process.env.LOSTARK_API_KEY}`,
                    },
                }
            );
            return response.data;
        }
        catch (error: any) { console.error("api/loa error:", error.message); }
    },
    event: async () => {
        try {
            const response = await axios.get(
                `${process.env.LOSTARK_API_BASE}/news/events`,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `bearer ${process.env.LOSTARK_API_KEY}`,
                    },
                }
            );
            return response.data;
        }
        catch (error: any) { console.error("api/loa error:", error.message); }
    },
    calendar: async () => {
        try {
            const response = await axios.get(
                `${process.env.LOSTARK_API_BASE}/gamecontents/calendar`,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `bearer ${process.env.LOSTARK_API_KEY}`,
                    },
                }
            );
            return response.data;
        }
        catch (error: any) { console.error("api/loa error:", error.message); }
    }
}

export async function GET(req: Request) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        const api = await lostArkApi.init()
        return CustomResponse(api);
    } catch (e: any) {
        
    }
}
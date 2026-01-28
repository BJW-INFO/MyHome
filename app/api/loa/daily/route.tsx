import { NextRequest, NextResponse } from "next/server";
import { CustomError, CustomResponse, getCategories, isPassword, passwordError, scheduler, supabase } from "@api/props";
import { lostArkApi } from "../route";
import { territoryPatten } from "./territory/route";

export async function GET(req: NextRequest) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        const api = await lostArkApi.calendar();
        const territoryTimes = await territoryPatten();
        return CustomResponse({
            territory: territoryTimes,
        });
    }
    catch (e: any) {
        if (e instanceof CustomError) {
            console.error(`${e.message}`, e.error);
            return NextResponse.json(
                { message: e.message, data: [], },
                { status: e.status },
            );
        }
        return NextResponse.json(
            { message: 'An unexpected error occurred during API processing.', data: [], },
            { status: 500 },
        );
    }
}
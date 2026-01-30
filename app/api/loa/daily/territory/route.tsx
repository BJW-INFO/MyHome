
import { NextRequest, NextResponse } from "next/server";
import { CustomError, CustomResponse, getCategories, isPassword, passwordError, supabase } from "../../../props";
import { contentsSort } from "../../props";

export interface territoryProp {
    // ?
}

export const territoryPatten = async () => {
    let result: any[] = [];
    try {
        const category = await getCategories(`LOA`, `TERRITORY_TIME`);
        const { data: contents, error } = await supabase.from(`contents`).select(`*,profile:profile(*)`).eq(`category`, category);
        for (const content of contents! ) {
            const { data: profiles } = await supabase.from(`profiles`).select(`*`).eq(`type`, content.profile.type).eq(`account`, content.profile.account);
            result.push({
                ...content,
                profiles: profiles,
            })
        }
        result = contentsSort(result,`profile`)
    }
    catch (error: any) { throw error; }
    return result;
}

export async function GET(req: NextRequest) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        const territory = await territoryPatten();
        return CustomResponse(territory);
    } catch (e: any) {
        return new CustomError(`loa/daily/territory => get error`, e.error, e.status);
    }
}

export async function PUT(req: NextRequest) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        const { id, profile } = await req.json();
        const { error } = await supabase.from(`contents`).update({ profile: profile }).eq(`id`, id);

        return CustomResponse();
    } catch (e: any) {
        return new CustomError(`loa/daily/territory => put error`, e.error, e.status);
    }
}

export async function POST(req: NextRequest) {
    if (!isPassword(req.headers.get("X-User-Password"))) { return passwordError; }
    try {
        const { id, expires } = await req.json();
        const { error } = await supabase.from(`contents`)
            .update({etc: expires === undefined?{} :{ expires: expires }})
            .eq(`id`, id);
        return CustomResponse();
    } catch (e: any) {
        return new CustomError(`loa/daily/territory => put error`, e.error, e.status);
    }
}
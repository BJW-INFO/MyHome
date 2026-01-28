import { NextResponse } from 'next/server';
import { CustomError, CustomResponse, isPassword, passwordError } from './props';

/** Login(Password) 확인 */
export async function POST(request: Request) {
    try {
        const { password } = await request.json();
        if (!password) {
            throw new CustomError('Password Undefined', [], 400,);
        }
        if (!isPassword(password)) {
            throw new CustomError('Password Does Not Match', [], 401,);
        }
        else { return CustomResponse(); }
    }
    catch (e: any) {
        return NextResponse.json(
            { message: e.message, data: e.data },
            { status: e.status }
        );
    }
}

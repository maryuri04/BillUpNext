import { RolServiceImpl } from "@/services/Impl/RolServiceImpl"
import { NextResponse } from "next/server";

export const GET = async () =>{
    const rolService = RolServiceImpl.getInstance();
    return NextResponse.json(await rolService.getAll());
}
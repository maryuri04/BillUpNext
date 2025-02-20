import { TipoDocumentoServiceImpl } from "@/services/Impl/TipoDocumentoServiceImpl"
import { NextResponse } from "next/server";

export const GET = async () =>{
    const tipoDocumentoServiceImpl = TipoDocumentoServiceImpl.getInstance();
    return NextResponse.json(await tipoDocumentoServiceImpl.getAll());
}
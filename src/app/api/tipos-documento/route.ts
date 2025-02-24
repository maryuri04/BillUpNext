import { TipoDocumentoServiceImpl } from "@/services/Impl/TipoDocumentoServiceImpl"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const tipoDocumentoServiceImpl = TipoDocumentoServiceImpl.getInstance();
        const tipoDocumentos = await tipoDocumentoServiceImpl.getAll();
        return NextResponse.json(tipoDocumentos, { status: 200 });
    } catch (error) {
        console.error(`Error al obtener los tipos de documento: ${error}`);
        return NextResponse.json({ message: 'Error al obtener los tipos de documento' }, { status: 500 });
    }
}
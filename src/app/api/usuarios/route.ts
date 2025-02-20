import {NextResponse} from "next/server"
import { UsuarioServiceImpl } from "@/services/Impl/UsuarioServiceImpl"


export const GET = async () =>{
    try {
        const usuarioService = UsuarioServiceImpl.getInstance();
        const respuesta = await usuarioService.getAll();

        return NextResponse.json(respuesta, { status: 200 }); // ✅ Devuelve una respuesta válida
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}

export const POST = async (request: Request) =>{
    const usuarioService = UsuarioServiceImpl.getInstance();
    const respuesta =  await usuarioService.create(await request.json());
    return respuesta;
    
}


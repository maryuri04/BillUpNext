import { NextResponse } from "next/server"
import { UsuarioServiceImpl } from "@/services/Impl/UsuarioServiceImpl"


export const GET = async () => {
    try {
        const usuarioService = UsuarioServiceImpl.getInstance();
        const respuesta = await usuarioService.getAll();

        return NextResponse.json(respuesta, { status: 200 });
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        return NextResponse.json({ message: "Error al obtener los usuarios" }, { status: 500 });
    }
}

export const POST = async (request: Request) => {
    try {
        const usuarioService = UsuarioServiceImpl.getInstance();
        const respuesta = await usuarioService.create(await request.json());
        return respuesta;
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        return NextResponse.json({ message: "Error al crear el usuario" }, { status: 500 });
    }
}


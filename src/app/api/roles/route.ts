import { RolServiceImpl } from "@/services/Impl/RolServiceImpl"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const rolService = RolServiceImpl.getInstance();
        const respuesta = await rolService.getAll();
        return NextResponse.json(respuesta, { status: 200 });
    } catch (error) {
        console.error("Error al obtener los roles:", error);
        return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
    }
}
import { NextResponse } from "next/server";
import { TipoPersonaServiceImpl } from "@/services/Impl/TipoPersonaServiceImpl";

export const GET = async () => {
    try {
        const tipoPersonaServiceImpl = TipoPersonaServiceImpl.getInstance();
        const tipoPersonas = await tipoPersonaServiceImpl.getAll();
        return NextResponse.json(tipoPersonas, { status: 200 });
    } catch (error) {
        console.error(`Error al obtener los tipos de persona: ${error}`);
        return NextResponse.json({ message: 'Error al obtener los tipos de persona' }, { status: 500 });
    }
}
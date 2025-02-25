import { NextResponse } from "next/server";
import { EmpresaServiceImpl } from "@/services/Impl/EmpresaServiceImpl";

export const GET = async () => {
    try {
        const empresaService = EmpresaServiceImpl.getInstance();
        const respuesta = await empresaService.getAll();
        return NextResponse.json(respuesta, { status: 200 });
    } catch (error) {
        console.error("Error al obtener las empresas:", error);
        return NextResponse.json({ message: "Error al obtener las empresas" }, { status: 500 });
    }
}
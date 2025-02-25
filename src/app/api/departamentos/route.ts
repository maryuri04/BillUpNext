import { DepartamentoServiceImpl } from '@/services/Impl/DepartamentoServiceImpl';
import { NextResponse } from 'next/server';

export const GET = async () =>{
    try {
        const departamentoService = DepartamentoServiceImpl.getInstance();
        const respuesta = await departamentoService.getAll();

        return NextResponse.json(respuesta, { status: 200 });
    } catch (error) {
        console.error("Error al obtener los departamentos:", error);
        return NextResponse.json({ message: "Error al obtener los departamentos" }, { status: 500 });
    }
}
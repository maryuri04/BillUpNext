import { MunicipioServiceImpl } from '@/services/Impl/MunicipioServiceImpl';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        const municipioService = MunicipioServiceImpl.getInstance();
        return NextResponse.json(await municipioService.getAll());
    } catch (error) {
        console.error("Error al obtener los municipios:", error);
        return NextResponse.json({ message: "Error al obtener los municipios " }, { status: 500 });
    }
}
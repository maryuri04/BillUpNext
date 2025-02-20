import { MunicipioServiceImpl } from '@/services/Impl/MunicipioServiceImpl';
import { NextResponse } from 'next/server';

export const GET = async () =>{
    const municipioService = MunicipioServiceImpl.getInstance();
    return NextResponse.json(await municipioService.getAll());
}
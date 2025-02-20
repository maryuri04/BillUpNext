import { DepartamentoServiceImpl } from '@/services/Impl/DepartamentoServiceImpl';
import { NextResponse } from 'next/server';

export const GET = async () =>{
    const departamentoService = DepartamentoServiceImpl.getInstance();
    return NextResponse.json(await departamentoService.getAll());
}
import { NextResponse } from "next/server";
import { EmpresaServiceImpl } from "@/services/Impl/EmpresaServiceImpl";

export const GET = async () =>{
    const empresaService = EmpresaServiceImpl.getInstance();
    const respuesta =  await empresaService.getAll(); 
    return NextResponse.json(respuesta);
}
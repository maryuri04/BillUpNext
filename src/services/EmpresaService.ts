import { NextResponse } from "next/server";
import { Empresa } from "@/models/Empresa";
import { EmpresaDTO } from "@/dto/EmpresaDTO";

export interface EmpresaService {
    getAll(): Promise<Array<EmpresaDTO>>;
    create(data: any): Promise<NextResponse>;
    update(data: any): Promise<NextResponse>;
    delete(idEmpresa: number): Promise<NextResponse>;
}
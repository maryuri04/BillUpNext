import { NextResponse } from "next/server";
import { Empresa } from "@/models/Empresa";

export interface EmpresaService {
    getAll(): Promise<Array<Empresa>>;
    create(data: any): Promise<NextResponse>;
    update(data: any): Promise<NextResponse>;
    delete(idEmpresa: number): Promise<NextResponse>;
}
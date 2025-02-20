import { Departamento } from "../models/Departamento";
import { NextResponse } from "next/server";

export interface DepartamentoService{
    getAll(): Promise<Departamento[]>;
    create(data: any): Promise<NextResponse>;
    update(data: any): Promise<NextResponse>;
    delete(idDepartamento: number): Promise<NextResponse>;
}

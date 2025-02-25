import { NextResponse } from "next/server";
import { EmpresaResponseDTO } from "@/dto/EmpresaResponseDTO";
import { EmpresaRequestDTO } from "@/dto/EmpresaRequestDTO";

export interface EmpresaService {
    getAll(): Promise<Array<EmpresaResponseDTO>>;
    create(empresa: EmpresaRequestDTO): Promise<NextResponse>;
    update(empresa: EmpresaRequestDTO): Promise<NextResponse>;
    delete(idEmpresa: number): Promise<boolean>;
    getById(idEmpresa: number): Promise<EmpresaResponseDTO | null>;
}
import { DepartamentoDTO } from "@/dto/DepartamentoDTO";
import { NextResponse } from "next/server";

export interface DepartamentoService{
    getAll(): Promise<DepartamentoDTO[]>;
}

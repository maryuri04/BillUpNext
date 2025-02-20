import { NextResponse } from "next/server";
import { TipoDocumento } from "@/models/TipoDocumento";

export interface TipoDocumentoService {
    getAll(): Promise<Array<TipoDocumento>>;
    create(data: any): Promise<NextResponse>;
    update(data: any): Promise<NextResponse>;
    delete(idTipoDocumento: number): Promise<NextResponse>;
}
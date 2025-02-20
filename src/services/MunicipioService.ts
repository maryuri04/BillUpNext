import { NextResponse } from "next/server";
import { Municipio } from "@/models/Municipio";

export interface MunicipioService{
    getAll(): Promise<Municipio[]>;
    create(data: any): Promise<NextResponse>;
    update(data: any): Promise<NextResponse>;
    delete(idMunicipio: number): Promise<NextResponse>;
}
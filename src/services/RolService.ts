import { RolDTO } from "@/dto/RolDTO";
import { Rol } from "@/models/Rol";
import { NextResponse } from "next/server";

export interface RolService{
    getAll(): Promise<RolDTO[]>;
    create(data: any): Promise<NextResponse>;
    update(data: any): Promise<NextResponse>;
    delete(idRol: number): Promise<NextResponse>;
}
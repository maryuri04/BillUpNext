import { Rol } from "@/models/Rol";
import { NextResponse } from "next/server";

export interface RolService{
    getAll(): Promise<Rol[]>;
    create(data: any): Promise<NextResponse>;
    update(data: any): Promise<NextResponse>;
    delete(idRol: number): Promise<NextResponse>;
}
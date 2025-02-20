import { RolService } from "../RolService";
import { Rol } from "@/models/Rol";
import { NextResponse } from "next/server";
import { RolDAOImpl } from "@/dao/impl/RolDAOImpl";
import { RolDTO } from "@/dto/RolDTO";
import { plainToInstance } from 'class-transformer';

export class RolServiceImpl implements RolService {
    private static instance: RolServiceImpl;
    private rolDAOImpl: RolDAOImpl = RolDAOImpl.getInstance();
    private constructor() { }
    public static getInstance(): RolServiceImpl {
        if (!RolServiceImpl.instance) {
            RolServiceImpl.instance = new RolServiceImpl();
        }
        return RolServiceImpl.instance;
    }

    public async create(data: any): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }

    public async delete(idRol: number): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }

    public getAll = async (): Promise<Rol[]> =>{
        const rolesDatabase: RolDTO[] = await this.rolDAOImpl.getAll();
        const roles: Rol[] = rolesDatabase.map((rolDTO) => {
            return (plainToInstance(Rol, rolDTO));
        });
        return roles;
    }

    public async update(data: any): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }
}
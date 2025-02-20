import { DepartamentoService } from "../DepartamentoService";
import { Departamento } from "../../models/Departamento";
import { NextResponse } from "next/server";
import { DepartamentoDAOImpl } from "@/dao/impl/DepartamentoDAOImpl";
import { plainToInstance } from "class-transformer";

export class DepartamentoServiceImpl implements DepartamentoService {
    private static instance: DepartamentoServiceImpl;
    private departamentoDAOImpl: DepartamentoDAOImpl;

    private constructor() {
        this.departamentoDAOImpl = DepartamentoDAOImpl.getInstance();
    }

    public static getInstance(): DepartamentoServiceImpl {
        if (!this.instance) this.instance = new DepartamentoServiceImpl();
        return this.instance;
    }

    public getAll = async (): Promise<Departamento[]> => {
        const departamentosDatabase = await this.departamentoDAOImpl.getAll();
        const departamentos: Departamento[] = departamentosDatabase.map((departamentoDTO) => {
            return (plainToInstance(Departamento, departamentoDTO));
        });
        return departamentos;
    }

    public async create(data: any): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }

    public async update(data: any): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }

    public async delete(idDepartamento: number): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }
}
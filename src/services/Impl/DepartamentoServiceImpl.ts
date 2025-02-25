import { DepartamentoService } from "../DepartamentoService";
import { Departamento } from "../../models/Departamento";
import { NextResponse } from "next/server";
import { DepartamentoDAOImpl } from "@/dao/impl/DepartamentoDAOImpl";
import { DepartamentoDTO } from "@/dto/DepartamentoDTO";

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

    public getAll = async (): Promise<DepartamentoDTO[]> => {
        try {
            const departamentosDatabase = await this.departamentoDAOImpl.getAll();
            return Promise.resolve(departamentosDatabase);

        } catch (error) {
            throw new Error("Error in DepartamentoServiceImpl.getAll: " + error);
        }
    }
}
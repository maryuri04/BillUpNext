import { EmpresaService } from "@/services/EmpresaService";
import { EmpresaDAOImpl } from "@/dao/impl/EmpresaDAOImpl";
import { Empresa } from "@/models/Empresa";
import { NextResponse } from "next/server";
import { EmpresaDTO } from "@/dto/EmpresaDTO";
import { plainToInstance } from "class-transformer";

export class EmpresaServiceImpl implements EmpresaService {
    private static instancia: EmpresaServiceImpl;
    private empresaDAOImpl: EmpresaDAOImpl = EmpresaDAOImpl.getInstance();
    private constructor() { }

    public static getInstance(): EmpresaServiceImpl {
        if (!EmpresaServiceImpl.instancia) {
            EmpresaServiceImpl.instancia = new EmpresaServiceImpl();
        }
        return EmpresaServiceImpl.instancia;
    }

    create(data: any): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }
    delete(idEmpresa: number): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }

    getAll = async (): Promise<Array<EmpresaDTO>> => {
        try { 
            const respuesta: EmpresaDTO[] = await this.empresaDAOImpl.getAll();
            return respuesta;
        } catch (error) {
            throw new Error(`Error en EmpresaService.getAll: ${error}`);
        }

    }

    update(data: any): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }
}
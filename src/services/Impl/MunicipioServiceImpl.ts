import { MunicipioService } from "@/services/MunicipioService";
import { MunicipioDAOImpl } from "@/dao/impl/MunicipioDAOImpl";
import { Municipio } from "@/models/Municipio";
import { NextResponse } from "next/server";
import { MunicipioDTO } from "@/dto/MunicipioDTO";
import { plainToInstance } from "class-transformer";

export class MunicipioServiceImpl implements MunicipioService {
    private static instance: MunicipioServiceImpl;
    private municipioDAOImpl: MunicipioDAOImpl = MunicipioDAOImpl.getInstance();

    private constructor() { }

    public static getInstance(): MunicipioServiceImpl {
        if (!MunicipioServiceImpl.instance) {
            MunicipioServiceImpl.instance = new MunicipioServiceImpl();
        }

        return MunicipioServiceImpl.instance;
    }

    public getAll = async (): Promise<Municipio[]> => {
        const municipiosDatabase : MunicipioDTO[] = await this.municipioDAOImpl.getAll();
        const municipios: Municipio[] = municipiosDatabase.map((municipioDTO) => {
            return (plainToInstance(Municipio, municipioDTO));
        });

        return municipios;
    }

    public async create(data: any): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }

    public async update(data: any): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }

    public async delete(idMunicipio: number): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }
}
import { TipoDocumentoDAO } from "@/dao/TipoDocumentoDAO";
import { TipoDocumento } from "@/models/TipoDocumento";
import { ejecutarQuery } from "@/connection/conexion";
import { TipoDocumentoDTO } from "@/dto/TipoDocumentoDTO";

export class TipoDocumentoDAOImpl implements TipoDocumentoDAO{
    private static instance: TipoDocumentoDAOImpl;
    private constructor(){}

    public static getInstance(): TipoDocumentoDAOImpl{
        if(!TipoDocumentoDAOImpl.instance){
            TipoDocumentoDAOImpl.instance = new TipoDocumentoDAOImpl();
        }
        return TipoDocumentoDAOImpl.instance;
    }

    public getAll = async (): Promise<Array<TipoDocumentoDTO>> =>{
        const tipoDocumentos: TipoDocumentoDTO[] = await ejecutarQuery(
            `SELECT * FROM \"TipoDocumento\";`,
            []
        );

        return tipoDocumentos;
    }

    public async create(tipoDocumento: TipoDocumento): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public async update(tipoDocumento: TipoDocumento): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public async delete(idTipoDocumento: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
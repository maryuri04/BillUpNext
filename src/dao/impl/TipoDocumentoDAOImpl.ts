import { TipoDocumentoDAO } from "@/dao/TipoDocumentoDAO";
import { TipoDocumento } from "@/models/TipoDocumento";
import { ejecutarQuery } from "@/connection/conexion";
import { TipoDocumentoDTO } from "@/dto/TipoDocumentoDTO";

export class TipoDocumentoDAOImpl implements TipoDocumentoDAO {
    private static instance: TipoDocumentoDAOImpl;
    private constructor() { }

    public static getInstance(): TipoDocumentoDAOImpl {
        if (!TipoDocumentoDAOImpl.instance) {
            TipoDocumentoDAOImpl.instance = new TipoDocumentoDAOImpl();
        }
        return TipoDocumentoDAOImpl.instance;
    }

    public getAll = async (): Promise<Array<TipoDocumentoDTO>> => {
        try {
            const tipoDocumentos: TipoDocumentoDTO[] = await ejecutarQuery(
                `SELECT * FROM \"TipoDocumento\";`,
                []
            );

            return tipoDocumentos;

        } catch (error) {
            throw new Error(`Error al obtener los tipos de documento: ${error}`);
        }
    }
}
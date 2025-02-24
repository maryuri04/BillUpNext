import { TipoPersonaDAOImpl } from "@/dao/impl/TipoPersonaDAOImpl";
import { TipoPersonaService } from "../TipoPersonaService";
import { TipoPersonaDTO } from "@/dto/TipoPersonaDTO";

export class TipoPersonaServiceImpl implements TipoPersonaService {
    private tipoPersonaDAO: TipoPersonaDAOImpl;
    private static instance: TipoPersonaServiceImpl;

    private constructor() {
        this.tipoPersonaDAO = TipoPersonaDAOImpl.getInstance();
    }

    public static getInstance(): TipoPersonaServiceImpl {
        if (!TipoPersonaServiceImpl.instance) {
            TipoPersonaServiceImpl.instance = new TipoPersonaServiceImpl();
        }

        return TipoPersonaServiceImpl.instance;
    }

    async getAll(): Promise<Array<TipoPersonaDTO>> {
        try {
            const tipoPersonas = await this.tipoPersonaDAO.getAll();
            return tipoPersonas;
        } catch (error) {
            throw new Error(`Error en TipoPersonaServiceImpl.getAll: ${error}`);
        }
    }
}
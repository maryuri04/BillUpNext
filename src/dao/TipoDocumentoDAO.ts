import { TipoDocumento } from "@/models/TipoDocumento";
import { TipoDocumentoDTO } from "@/dto/TipoDocumentoDTO";

export interface TipoDocumentoDAO{
    getAll(): Promise<Array<TipoDocumentoDTO>>;
}
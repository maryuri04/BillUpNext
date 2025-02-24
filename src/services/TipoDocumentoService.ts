import { TipoDocumentoDTO } from "@/dto/TipoDocumentoDTO";

export interface TipoDocumentoService {
    getAll(): Promise<Array<TipoDocumentoDTO>>;
}
import { TipoDocumento } from "@/models/TipoDocumento";
import { TipoDocumentoDTO } from "@/dto/TipoDocumentoDTO";

export interface TipoDocumentoDAO{
    getAll(): Promise<Array<TipoDocumentoDTO>>;
    create(tipoDocumento: TipoDocumento): Promise<boolean>;
    update(tipoDocumento: TipoDocumento): Promise<boolean>;
    delete(idTipoDocumento: number): Promise<boolean>;
}
import { TipoPersonaDTO } from "../dto/TipoPersonaDTO";

export interface TipoPersonaService {
    getAll(): Promise<Array<TipoPersonaDTO>>;
}
import { TipoPersonaDTO } from "@/dto/TipoPersonaDTO";

export interface TipoPersonaDAO {
    getAll(): Promise<Array<TipoPersonaDTO>>;
}
import { Municipio } from "@/models/Municipio";
import { MunicipioDTO } from "@/dto/MunicipioDTO";

export interface MunicipioDAO {
    create(municipio: Municipio): Promise<boolean>;
    delete(idMunicipio: number): Promise<boolean>;
    getAll(): Promise<MunicipioDTO[]>;
    update(municipio: Municipio): Promise<boolean>;
}
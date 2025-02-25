import { MunicipioDTO } from "@/dto/MunicipioDTO";

export interface MunicipioDAO {
    getAll(): Promise<MunicipioDTO[]>;
}
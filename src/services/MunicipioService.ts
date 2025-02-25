import { MunicipioDTO } from "@/dto/MunicipioDTO";

export interface MunicipioService{
    getAll(): Promise<MunicipioDTO[]>;
}
import { Departamento } from "@/models/Departamento";
import { DepartamentoDTO } from "@/dto/DepartamentoDTO";

export interface DepartamentoDAO {
    getAll(): Promise<DepartamentoDTO[]>;
}
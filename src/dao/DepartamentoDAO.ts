import { Departamento } from "@/models/Departamento";
import { DepartamentoDTO } from "@/dto/DepartamentoDTO";

export interface DepartamentoDAO {
    create(departamento: Departamento): Promise<boolean>;
    delete(idDepartamento: number): Promise<boolean>;
    getAll(): Promise<DepartamentoDTO[]>;
    update(departamento: Departamento): Promise<boolean>;
}
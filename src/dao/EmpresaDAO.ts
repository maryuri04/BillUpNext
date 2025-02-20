import { Empresa } from "@/models/Empresa";
import { EmpresaDTO } from "@/dto/EmpresaDTO";

export interface EmpresaDAO{
    getAll(): Promise<Array<EmpresaDTO>>;
    create(empresa: Empresa): Promise<boolean>;
    update(empresa: Empresa): Promise<boolean>;
    delete(idEmpresa: number): Promise<boolean>;
}

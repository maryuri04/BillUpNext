import { EmpresaDAO } from "@/dao/EmpresaDAO";
import { Empresa } from "@/models/Empresa";
import { ejecutarQuery } from "@/connection/conexion"
import { EmpresaDTO } from "@/dto/EmpresaDTO";

export class EmpresaDAOImpl implements EmpresaDAO {
    private static instancia: EmpresaDAOImpl;
    private constructor() { }

    public static getInstance(): EmpresaDAOImpl {
        if (!EmpresaDAOImpl.instancia) {
            EmpresaDAOImpl.instancia = new EmpresaDAOImpl();
        }
        return EmpresaDAOImpl.instancia;
    }

    public getAll = async(): Promise<Array<EmpresaDTO>> => {
        try {
            const empresasDatabase : EmpresaDTO[] = await ejecutarQuery(
                `SELECT * FROM \"Empresa\";`,
                []
            );

            return empresasDatabase;
       
        } catch (error) {
            throw new Error(`Error en EmpresaDAO.getAll: ${error}`);
        }

    }
    public create(empresa: Empresa): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public update(empresa: Empresa): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public delete(idEmpresa: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}
import { DepartamentoDAO } from "../DepartamentoDAO";
import { DepartamentoDTO } from "@/dto/DepartamentoDTO";
import { ejecutarQuery } from "@/connection/conexion";
import { Departamento } from "@/models/Departamento";

export class DepartamentoDAOImpl implements DepartamentoDAO{
    private static instance: DepartamentoDAOImpl;

    private constructor(){}

    public static getInstance(): DepartamentoDAOImpl{
        if(!DepartamentoDAOImpl.instance){
            DepartamentoDAOImpl.instance = new DepartamentoDAOImpl();
        }
        return DepartamentoDAOImpl.instance;
    }

    public create(departamento: Departamento): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public delete(idDepartamento: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public getAll = async (): Promise<DepartamentoDTO[]> =>{
        try{
            const departamentos: DepartamentoDTO[] = await ejecutarQuery(
                `SELECT * FROM \"Departamento\";`,
                []
            );
            return departamentos;
        } catch (error) {
            console.error("Error inesperado:", error);
            return Promise.reject([]);
        }
    }
    
    public update(departamento: Departamento): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
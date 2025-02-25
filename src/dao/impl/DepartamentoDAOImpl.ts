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

    public getAll = async (): Promise<DepartamentoDTO[]> =>{
        try{
            const departamentos: DepartamentoDTO[] = await ejecutarQuery(
                `SELECT * FROM \"Departamento\";`,
                []
            );
            return departamentos;
        } catch (error) {
            throw new Error("Error in DepartamentoDAOImpl.getAll: " + error);
        }
    }
}
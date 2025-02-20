import { MunicipioDAO } from "@/dao/MunicipioDAO";
import { Municipio } from "@/models/Municipio";
import { MunicipioDTO } from "@/dto/MunicipioDTO";
import { ejecutarQuery } from "@/connection/conexion";

export class MunicipioDAOImpl implements MunicipioDAO {
    private static instance: MunicipioDAOImpl;
    private constructor() { }
    public static getInstance(): MunicipioDAOImpl {
        if (!MunicipioDAOImpl.instance) {
            MunicipioDAOImpl.instance = new MunicipioDAOImpl();
        }
        return MunicipioDAOImpl.instance;
    }
    public create(municipio: Municipio): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public delete(idMunicipio: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public getAll = async (): Promise<MunicipioDTO[]> => {
        try{
            const municipios: MunicipioDTO[] = await ejecutarQuery(
                `SELECT * FROM \"Municipio\";`,
                []
            );
            return municipios;
        } catch (error) {
            console.error("Error inesperado:", error);
            return Promise.reject([]);
        }   
    }
    public update(municipio: Municipio): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
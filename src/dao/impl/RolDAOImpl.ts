import { RolDAO } from "../RolDAO";
import { Rol } from "@/models/Rol";
import { RolDTO } from "@/dto/RolDTO";
import { ejecutarQuery } from "@/connection/conexion";

export class RolDAOImpl implements RolDAO {
    private static instance: RolDAOImpl;
    private constructor() { }
    public static getInstance(): RolDAOImpl {
        if (!RolDAOImpl.instance) {
            RolDAOImpl.instance = new RolDAOImpl();
        }
        return RolDAOImpl.instance;
    }
    
    public async create(role: Rol): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public async delete(idRole: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public getAll = async(): Promise<RolDTO[]> =>{
        try {
            const roles: RolDTO[] = await ejecutarQuery(
                `SELECT * FROM \"Rol\";`,
                []
            );
            return roles;
        } catch (error) {
            throw new Error(`Error en RolDAO.getAll: ${error}`);
        }
    }
    
    public async update(role: Rol): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
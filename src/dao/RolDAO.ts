import { Rol } from '@/models/Rol';
import { RolDTO } from '@/dto/RolDTO';

export interface RolDAO {
    create(role: Rol): Promise<boolean>;
    delete(idRole: number): Promise<boolean>;
    getAll(): Promise<RolDTO[]>;
    update(role: Rol): Promise<boolean>;
}

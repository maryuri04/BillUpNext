import { UsuarioDAO } from "@/dao/UsuarioDAO";
import { ejecutarQuery } from "@/connection/conexion"
import { UsuarioRequestDTO } from "@/dto/UsuarioRequestDTO";
import { ResultadoBooleanDTO } from "@/dto/ResultadoBooleanDTO";
import { Usuario } from "@/models/Usuario";
import { UsuarioResponseDTO } from "@/dto/UsuarioResponseDTO";
import { UsuarioAutenticacionDTO } from "@/dto/UsuarioAutenticacionDTO";

export class UsuarioDAOImpl implements UsuarioDAO {
    private static instancia: UsuarioDAOImpl;
    private constructor() { }


    public static getInstance(): UsuarioDAOImpl {
        if (!UsuarioDAOImpl.instancia) {
            UsuarioDAOImpl.instancia = new UsuarioDAOImpl();
        }
        return UsuarioDAOImpl.instancia;
    }

    public create = async (usuario: UsuarioRequestDTO): Promise<boolean> => {
        try {
            const respuesta = await ejecutarQuery<ResultadoBooleanDTO>(
                `SELECT insertarUsuario ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) as resultado;`,
                [
                    usuario.idEmpresa,
                    usuario.idTipoDocumento,
                    usuario.idMunicipio,
                    usuario.idRol,
                    usuario.numeroDocumentoUsuario,
                    usuario.nombreUsuario,
                    usuario.apellidoUsuario,
                    usuario.correoUsuario,
                    usuario.telefonoUsuario,
                    usuario.direccionUsuario,
                    usuario.claveUsuario,
                    usuario.estadoUsuario
                ]
            );

            return respuesta.length > 0 ? respuesta[0].resultado : false; // Si la respuesta está vacía, se retorna false
        }
        catch (error) {
            console.error("Error inesperado:", error);
            return false;
        }
    }



    public update = async (usuario: UsuarioRequestDTO): Promise<boolean> => {
        try {
            const respuesta = await ejecutarQuery<ResultadoBooleanDTO>(
                `SELECT actualizarUsuario ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) as resultado;`,
                [
                    usuario.idUsuario,
                    usuario.idEmpresa,
                    usuario.idTipoDocumento,
                    usuario.idMunicipio,
                    usuario.idRol,
                    usuario.numeroDocumentoUsuario,
                    usuario.nombreUsuario,
                    usuario.apellidoUsuario,
                    usuario.correoUsuario,
                    usuario.telefonoUsuario,
                    usuario.direccionUsuario,
                    usuario.estadoUsuario
                ]
            );

            return respuesta.length > 0 ? respuesta[0].resultado : false; // Si la respuesta está vacía, se retorna false
        }
        catch (error) {
            console.error("Error inesperado:", error);
            return false;
        }
    }


    public delete = async (idUsuario: number): Promise<boolean> => {
        try {
            const respuesta = await ejecutarQuery<ResultadoBooleanDTO>(
                `SELECT eliminarUsuario($1) as resultado;`,
                [idUsuario]
            );
            return respuesta.length > 0 ? respuesta[0].resultado : false;
        } catch (error) {
            console.error("Error inesperado:", error);
            return false;
        }
    }

    public getAll = async (): Promise<Array<UsuarioResponseDTO>> => {
        try {
            const respuesta: UsuarioResponseDTO[] = await ejecutarQuery(
                `SELECT u.\"idUsuario\", u.\"idEmpresa\", u.\"idTipoDocumento\", u.\"idMunicipio\", 
                m.\"idDepartamento\", u.\"idRol\", u.\"numeroDocumentoUsuario\", u.\"nombreUsuario\", 
                u.\"apellidoUsuario\", u.\"correoUsuario\", u.\"telefonoUsuario\", u.\"direccionUsuario\", 
                u.\"estadoUsuario\"
                FROM \"Usuario\" u 
                JOIN \"Municipio\" m ON m.\"idMunicipio\" = u.\"idMunicipio\";`,
                []
            );

            return respuesta;
        } catch (error) {
            console.error("Error inesperado:", error);
            return [];
        }
    }


    public getByIdUser = async (idUsuario: number): Promise<UsuarioResponseDTO | null> => {
        try {
            const respuesta: UsuarioResponseDTO[] = await ejecutarQuery(
                `SELECT u.\"idUsuario\", u.\"idEmpresa\", u.\"idTipoDocumento\", u.\"idMunicipio\", 
                m.\"idDepartamento\", u.\"idRol\", u.\"numeroDocumentoUsuario\", u.\"nombreUsuario\", 
                u.\"apellidoUsuario\", u.\"correoUsuario\", u.\"telefonoUsuario\", u.\"direccionUsuario\", 
                u.\"estadoUsuario\"
                FROM \"Usuario\" u 
                JOIN \"Municipio\" m ON m.\"idMunicipio\" = u.\"idMunicipio\"
                WHERE u.\"idUsuario\" = $1;`,
                [idUsuario]
            );

            return respuesta.length > 0 ? respuesta[0] : null;

        } catch (error) {
            console.error("Error inesperado:", error);
            return null;
        }

    }

    public existUsuarioDoc = async (numeroDocumentoUsuario: string): Promise<boolean> => {
        try {
            const respuesta = await ejecutarQuery(`SELECT validarExisteUsuarioDoc ($1) as resultado;`, [numeroDocumentoUsuario]);
            return respuesta.length > 0 ? respuesta[0].resultado : false;
        } catch (error) {
            console.error("Error inesperado:", error);
            return false;
        }
    }

    public existUsuarioCorreo = async (correoUsuario: string): Promise<boolean> => {
        try {
            const respuesta = await ejecutarQuery(`SELECT validarExisteUsuarioCorreo ($1) as resultado;`, [correoUsuario]);
            return respuesta.length > 0 ? respuesta[0].resultado : false;
        } catch (error) {
            console.error("Error inesperado:", error);
            return false;
        }
    }

    public existUsuarioTelefono = async (telefonoUsuario: string): Promise<boolean> => {
        try {
            const respuesta = await ejecutarQuery(`SELECT validarExisteUsuarioTelefono ($1) as resultado;`, [telefonoUsuario]);
            return respuesta.length > 0 ? respuesta[0].resultado : false;
        } catch (error) {
            console.error("Error inesperado:", error);
            return false;
        }
    }

    public getClaveAutenticacion = async (numeroDocumentoUsuario: string): Promise<UsuarioAutenticacionDTO | null> => {
        try {
            const respuesta = await ejecutarQuery<UsuarioAutenticacionDTO>(
                `SELECT \"claveUsuario\", \"numeroDocumentoUsuario\", \"idRol\", \"idUsuario\" FROM \"Usuario\" WHERE \"numeroDocumentoUsuario\" = $1;`,
                [numeroDocumentoUsuario]
            );

            return respuesta.length > 0 ? respuesta[0] : null;
        } catch (error) {
            console.error("Error inesperado:", error);
            return null;
        }
    }

}


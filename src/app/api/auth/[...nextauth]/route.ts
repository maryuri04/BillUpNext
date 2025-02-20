import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UsuarioServiceImpl } from "@/services/Impl/UsuarioServiceImpl";
import { UsuarioRequestDTO } from "@/dto/UsuarioRequestDTO";
import { UsuarioAutenticacionDTO } from "@/dto/UsuarioAutenticacionDTO";

declare module "next-auth" {
    interface User {
        rolUsuario: string;
        numeroDocumentoUsuario: string;
    }
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                numeroDocumentoUsuario: { label: "Numero de documento", type: "text" },
                claveUsuario: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const usuarioService = UsuarioServiceImpl.getInstance();
                    if (!credentials) {
                        return null;
                    }
                    const { numeroDocumentoUsuario, claveUsuario } = credentials;
                    const respuesta  = await usuarioService.autenticarUsuario(numeroDocumentoUsuario, claveUsuario);

                    if (respuesta!=null) {
                        const usuario = respuesta as UsuarioAutenticacionDTO;
                        if (!usuario) {
                            throw new Error("Usuario o contraseña incorrectos");
                        }
                        return {
                            id: usuario.idUsuario ? usuario.idUsuario.toString() : "",
                            rolUsuario: usuario.idRol.toString(),
                            numeroDocumentoUsuario: usuario.numeroDocumentoUsuario
                        };
                    } else {
                        throw new Error("Usuario o contraseña incorrectos");
                    }
                } catch (error) {
                    console.error("Error inesperado:", error);
                    throw new Error("Usuario o contraseña incorrectos");
                }
            }
        })
    ],
    callbacks: {
        jwt({ token, account, user, profile, session }) {
            if (user) {
                token.user = {
                    id: user.id,
                    rolUsuario: user.rolUsuario,
                    numeroDocumentoUsuario: user.numeroDocumentoUsuario
                };
            }
            return token;

        },

        // session guarda la información del usuario en la sesión
        session({ session, token }) {    
            if (token.user) {
                session.user = token.user;
            }
            return session;

        }
    },
    pages: {
        signIn: "/", 
        error: "/",
    },
});

export { handler as GET, handler as POST };
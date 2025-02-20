import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Configura el middleware para proteger rutas específicas
export default withAuth(
  function middleware(req) {
    // Si el usuario no está autenticado, redirigir al login
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/", // Página a la que redirige si no está autenticado
    },
  }
);

// Definir en qué rutas se aplica el middleware
export const config = {
  matcher: ["/dashboard/:path*", "/usuarios/:path*", "/api/:path*"], // Protege estas rutas
};
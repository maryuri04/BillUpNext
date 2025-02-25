CREATE OR REPLACE FUNCTION validarExisteUsuarioCorreo(
    _correoUsuario "Usuario"."correoUsuario"%TYPE
) 
RETURNS BOOLEAN AS
$$
BEGIN
    -- Validar si el usuario existe
    RETURN EXISTS (
        SELECT 1
        FROM "Usuario"
        WHERE "correoUsuario" = _correoUsuario
    );
END;
$$
LANGUAGE PLPGSQL;
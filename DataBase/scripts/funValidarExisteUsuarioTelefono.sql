CREATE OR REPLACE FUNCTION validarExisteUsuarioTelefono(
    _telefonoUsuario "Usuario"."telefonoUsuario"%TYPE
) 
RETURNS BOOLEAN AS
$$
BEGIN
    -- Validar si el usuario existe
    RETURN EXISTS (
        SELECT 1
        FROM "Usuario"
        WHERE "telefonoUsuario" = _telefonoUsuario
    );
END;
$$
LANGUAGE PLPGSQL;
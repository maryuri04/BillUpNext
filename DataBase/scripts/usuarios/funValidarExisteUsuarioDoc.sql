CREATE OR REPLACE FUNCTION validarExisteUsuarioDoc(
    _numeroDocumentoUsuario "Usuario"."numeroDocumentoUsuario"%TYPE
) 
RETURNS BOOLEAN AS
$$
BEGIN
    -- Validar si el usuario existe
    RETURN EXISTS (
        SELECT 1
        FROM "Usuario"
        WHERE "numeroDocumentoUsuario" = _numeroDocumentoUsuario
    );
END;
$$
LANGUAGE PLPGSQL;

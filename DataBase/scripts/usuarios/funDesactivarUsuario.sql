CREATE OR REPLACE FUNCTION desactivarUsuario(
    _idUsuario "Usuario"."idUsuario"%TYPE)
RETURNS BOOLEAN AS
$$
BEGIN
    UPDATE FROM "Usuario" SET "estadoUsuario" = FALSE  WHERE "idUsuario" = _idUsuario;
    
    IF FOUND THEN
        RAISE NOTICE 'Se desactivo correctamente el usuario';
        RETURN TRUE;
    ELSE
        RAISE NOTICE 'Ocurrió un error al desactivar el usuario';
        RETURN FALSE;
    END IF;
END;
$$
LANGUAGE PLPGSQL;
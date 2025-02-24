CREATE OR REPLACE FUNCTION eliminarUsuario(
    _idUsuario "Usuario"."idUsuario"%TYPE)
RETURNS BOOLEAN AS
$$
BEGIN
    DELETE FROM "Usuario" WHERE "idUsuario" = _idUsuario;
    
    IF FOUND THEN
        RAISE NOTICE 'Se eliminó correctamente el usuario';
        RETURN TRUE;
    ELSE
        RAISE NOTICE 'Ocurrió un error al eliminar el usuario';
        RETURN FALSE;
    END IF;
END;
$$
LANGUAGE PLPGSQL;

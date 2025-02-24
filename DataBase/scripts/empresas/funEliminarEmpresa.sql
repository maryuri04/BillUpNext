CREATE OR REPLACE FUNCTION eliminarEmpresa(
    _idEmpresa "Empresa"."idEmpresa"%TYPE)
RETURNS BOOLEAN AS
$$
BEGIN
    DELETE FROM "Empresa" WHERE "idEmpresa" = _idEmpresa;
    
    IF FOUND THEN
        RAISE NOTICE 'Se eliminó correctamente la empresa';
        RETURN TRUE;
    ELSE
        RAISE NOTICE 'Ocurrió un error al eliminar la empresa';
        RETURN FALSE;
    END IF;
END;
$$
LANGUAGE PLPGSQL;

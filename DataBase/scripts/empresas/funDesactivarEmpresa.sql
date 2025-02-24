CREATE OR REPLACE FUNCTION desactivarEmpresa(
    _idEmpresa "Empresa"."idEmpresa"%TYPE)
RETURNS BOOLEAN AS
$$
BEGIN
    UPDATE FROM "Empresa" SET "estadoEmpresa" = FALSE  WHERE "idEmpresa" = _idEmpresa;
    
    IF FOUND THEN
        RAISE NOTICE 'Se desactivo correctamente la Empresa';
        RETURN TRUE;
    ELSE
        RAISE NOTICE 'Ocurrió un error al desactivar la Empresa';
        RETURN FALSE;
    END IF;
END;
$$
LANGUAGE PLPGSQL;
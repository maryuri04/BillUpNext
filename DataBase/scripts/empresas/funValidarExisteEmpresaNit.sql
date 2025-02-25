CREATE OR REPLACE FUNCTION validarExisteEmpresaNit(
    _nitEmpresa "Empresa"."nitEmpresa"%TYPE
) 
RETURNS BOOLEAN AS
$$
BEGIN
    -- Validar si el Empresa existe
    RETURN EXISTS (
        SELECT 1
        FROM "Empresa"
        WHERE "nitEmpresa" = _nitEmpresa
    );
END;
$$
LANGUAGE PLPGSQL;

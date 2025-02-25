CREATE OR REPLACE FUNCTION validarExisteEmpresaCorreo(
    _correoEmpresa "Empresa"."correoEmpresa"%TYPE
) 
RETURNS BOOLEAN AS
$$
BEGIN
    -- Validar si el Empresa existe
    RETURN EXISTS (
        SELECT 1
        FROM "Empresa"
        WHERE "correoEmpresa" = _correoEmpresa
    );
END;
$$
LANGUAGE PLPGSQL;
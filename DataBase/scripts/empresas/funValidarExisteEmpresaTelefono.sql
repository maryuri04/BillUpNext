CREATE OR REPLACE FUNCTION validarExisteEmpresaTelefono(
    _telefonoEmpresa "Empresa"."telefonoEmpresa"%TYPE
) 
RETURNS BOOLEAN AS
$$
BEGIN
    -- Validar si el Empresa existe
    RETURN EXISTS (
        SELECT 1
        FROM "Empresa"
        WHERE "telefonoEmpresa" = _telefonoEmpresa
    );
END;
$$
LANGUAGE PLPGSQL;
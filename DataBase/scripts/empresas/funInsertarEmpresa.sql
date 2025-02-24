CREATE OR REPLACE FUNCTION insertarEmpresa( 
    _idTipoPersona "Empresa"."idTipoPersona"%TYPE,
    _idRegimenContribuyente "Empresa"."idRegimenContribuyente"%TYPE, 
    _idMunicipio "Empresa"."idMunicipio"%TYPE, 
    _nitEmpresa "Empresa"."nitEmpresa"%TYPE, 
    _numeroDocumentoEmpresa "Empresa"."numeroDocumentoEmpresa"%TYPE, 
    _digitoVerificacionEmpresa "Empresa"."digitoVerificacionEmpresa"%TYPE, 
    _nombreEmpresa "Empresa"."nombreEmpresa"%TYPE, 
    _razonSocialEmpresa "Empresa"."razonSocialEmpresa"%TYPE,
    _direccionEmpresa "Empresa"."direccionEmpresa"%TYPE,
    _codigoPostalEmpresa "Empresa"."codigoPostalEmpresa"%TYPE,   
    _telefonoEmpresa "Empresa"."telefonoEmpresa"%TYPE,  
    _correoEmpresa "Empresa"."correoEmpresa"%TYPE, 
    _logoEmpresa "Empresa"."logoEmpresa"%TYPE, 
    _estadoEmpresa "Empresa"."estadoEmpresa"%TYPE)
RETURNS BOOLEAN AS
$$
DECLARE 
    id INTEGER;
BEGIN
    INSERT INTO "Empresa" (
        "idTipoPersona", 
        "idRegimenContribuyente", 
        "idMunicipio", 
        "nitEmpresa", 
        "numeroDocumentoEmpresa", 
        "digitoVerificacionEmpresa", 
        "nombreEmpresa", 
        "razonSocialEmpresa", 
        "direccionEmpresa", 
        "codigoPostalEmpresa", 
        "telefonoEmpresa", 
        "correoEmpresa", 
        "logoEmpresa", 
        "estadoEmpresa"
    ) 
    VALUES (
        _idTipoPersona, 
        _idRegimenContribuyente, 
        _idMunicipio, 
        _nitEmpresa, 
        _numeroDocumentoEmpresa, 
        _digitoVerificacionEmpresa, 
        _nombreEmpresa, 
        _razonSocialEmpresa, 
        _direccionEmpresa, 
        _codigoPostalEmpresa, 
        _telefonoEmpresa, 
        _correoEmpresa, 
        _logoEmpresa, 
        _estadoEmpresa
    )
    RETURNING "idEmpresa" INTO id;

    IF FOUND THEN
        RAISE NOTICE 'Se insertó correctamente la Empresa con ID %', id;
        RETURN TRUE;
    ELSE
        RAISE NOTICE 'Ocurrió un error al insertar la Empresa';
        RETURN FALSE;
    END IF;
END;
$$
LANGUAGE PLPGSQL;
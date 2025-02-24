CREATE OR REPLACE FUNCTION actualizarEmpresa(
    _idEmpresa "Empresa"."idEmpresa"%TYPE, 
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
    _estadoEmpresa "Empresa"."estadoEmpresa"%TYPE
)
RETURNS BOOLEAN AS
$$
BEGIN
    UPDATE "Empresa" SET 
        "idTipoPersona" = COALESCE(_idTipoPersona, "idTipoPersona"),
        "idRegimenContribuyente" = COALESCE(_idRegimenContribuyente, "idRegimenContribuyente"),
        "idMunicipio" = COALESCE(_idMunicipio, "idMunicipio"),
        "nitEmpresa" = COALESCE(_nitEmpresa, "nitEmpresa"),
        "numeroDocumentoEmpresa" = COALESCE(_numeroDocumentoEmpresa, "numeroDocumentoEmpresa"),
        "digitoVerificacionEmpresa" = COALESCE(_digitoVerificacionEmpresa, "digitoVerificacionEmpresa"),
        "nombreEmpresa" = COALESCE(_nombreEmpresa, "nombreEmpresa"),
        "razonSocialEmpresa" = COALESCE(_razonSocialEmpresa, "razonSocialEmpresa"),
        "direccionEmpresa" = COALESCE(_direccionEmpresa, "direccionEmpresa"),
        "codigoPostalEmpresa" = COALESCE(_codigoPostalEmpresa, "codigoPostalEmpresa"),
        "telefonoEmpresa" = COALESCE(_telefonoEmpresa, "telefonoEmpresa"),
        "correoEmpresa" = COALESCE(_correoEmpresa, "correoEmpresa"),
        "logoEmpresa" = COALESCE(_logoEmpresa, "logoEmpresa"),
        "estadoEmpresa" = COALESCE(_estadoEmpresa, "estadoEmpresa")
    WHERE "idEmpresa" = _idEmpresa;

    IF FOUND THEN
        RAISE NOTICE 'Se actualizó correctamente la empresa con ID %', _idEmpresa;
        RETURN TRUE;
    ELSE
        RAISE NOTICE 'No se encontró la empresa con ID %, no se realizó ninguna actualización', _idEmpresa;
        RETURN FALSE;
    END IF;
END;
$$
LANGUAGE PLPGSQL;

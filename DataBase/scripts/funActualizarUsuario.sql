CREATE OR REPLACE FUNCTION actualizarUsuario(
    _idUsuario "Usuario"."idUsuario"%TYPE, 
    _idEmpresa "Usuario"."idEmpresa"%TYPE, 
    _idTipoDocumento "Usuario"."idTipoDocumento"%TYPE,
    _idMunicipio "Usuario"."idMunicipio"%TYPE, 
    _idRol "Usuario"."idRol"%TYPE, 
    _numeroDocumentoUsuario "Usuario"."numeroDocumentoUsuario"%TYPE, 
    _nombreUsuario "Usuario"."nombreUsuario"%TYPE, 
    _apellidoUsuario "Usuario"."apellidoUsuario"%TYPE, 
    _correoUsuario "Usuario"."correoUsuario"%TYPE, 
    _telefonoUsuario "Usuario"."telefonoUsuario"%TYPE,  
    _direccionUsuario "Usuario"."direccionUsuario"%TYPE, 
    _estadoUsuario "Usuario"."estadoUsuario"%TYPE)
RETURNS BOOLEAN AS
$$
BEGIN
    UPDATE "Usuario" SET 
        "idEmpresa" = COALESCE(_idEmpresa, "idEmpresa"),
        "idTipoDocumento" = COALESCE(_idTipoDocumento, "idTipoDocumento"),
        "idMunicipio" = COALESCE(_idMunicipio, "idMunicipio"),
        "idRol" = COALESCE(_idRol, "idRol"),
        "numeroDocumentoUsuario" = COALESCE(_numeroDocumentoUsuario, "numeroDocumentoUsuario"),
        "nombreUsuario" = COALESCE(_nombreUsuario, "nombreUsuario"),
        "apellidoUsuario" = COALESCE(_apellidoUsuario, "apellidoUsuario"),
        "correoUsuario" = COALESCE(_correoUsuario, "correoUsuario"),
        "telefonoUsuario" = COALESCE(_telefonoUsuario, "telefonoUsuario"),
        "direccionUsuario" = COALESCE(_direccionUsuario, "direccionUsuario"),
        "estadoUsuario" = COALESCE(_estadoUsuario, "estadoUsuario")
    WHERE "idUsuario" = _idUsuario;

    IF FOUND THEN
        RAISE NOTICE 'Se actualizó correctamente el usuario';
        RETURN TRUE;
    ELSE
        RAISE NOTICE 'Ocurrió un error al actualizar el usuario';
        RETURN FALSE;
    END IF;
END;
$$
LANGUAGE PLPGSQL;



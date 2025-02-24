CREATE OR REPLACE FUNCTION insertarUsuario(
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
    _claveUsuario "Usuario"."claveUsuario"%TYPE, 
    _estadoUsuario "Usuario"."estadoUsuario"%TYPE
)
RETURNS BOOLEAN AS
$$
DECLARE 
    id INTEGER;
BEGIN
    INSERT INTO "Usuario" (
        "idEmpresa", 
        "idTipoDocumento", 
        "idMunicipio", 
        "idRol", 
        "numeroDocumentoUsuario", 
        "nombreUsuario", 
        "apellidoUsuario", 
        "correoUsuario", 
        "telefonoUsuario", 
        "direccionUsuario", 
        "claveUsuario", 
        "estadoUsuario"
    ) 
    VALUES (
        _idEmpresa, 
        _idTipoDocumento, 
        _idMunicipio, 
        _idRol, 
        _numeroDocumentoUsuario, 
        _nombreUsuario, 
        _apellidoUsuario, 
        _correoUsuario, 
        _telefonoUsuario, 
        _direccionUsuario, 
        _claveUsuario, 
        _estadoUsuario
    )
    RETURNING "idUsuario" INTO id;

    IF id IS NOT NULL THEN
        RAISE NOTICE 'Se insertó correctamente el usuario con ID %', id;
        RETURN TRUE;
    ELSE
        RAISE NOTICE 'Ocurrió un error al insertar el usuario';
        RETURN FALSE;
    END IF;
END;
$$
LANGUAGE PLPGSQL;

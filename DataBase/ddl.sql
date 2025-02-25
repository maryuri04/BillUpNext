--create database billup;
--use billup;
DROP TABLE IF EXISTS "GravamenProducto";
DROP TABLE IF EXISTS "DetalleVenta";
DROP TABLE IF EXISTS "DetalleCompra";
DROP TABLE IF EXISTS "TerceroProducto";
DROP TABLE IF EXISTS "Producto";
DROP TABLE IF EXISTS "MedioPago";
DROP TABLE IF EXISTS "Venta";
DROP TABLE IF EXISTS "Compra";
DROP TABLE IF EXISTS "Movimiento";
DROP TABLE IF EXISTS "DetalleCaja";
DROP TABLE IF EXISTS "Tercero";
DROP TABLE IF EXISTS "Usuario";
DROP TABLE IF EXISTS "Caja";
DROP TABLE IF EXISTS "Empresa";
DROP TABLE IF EXISTS "Gravamen";
DROP TABLE IF EXISTS "TipoMedioPago";
DROP TABLE IF EXISTS "UbicacionVenta";
DROP TABLE IF EXISTS "Rol";
DROP TABLE IF EXISTS "RegimenContribuyente";
DROP TABLE IF EXISTS "TipoPersona";
DROP TABLE IF EXISTS "TipoDocumento";
DROP TABLE IF EXISTS "Municipio";
DROP TABLE IF EXISTS "Departamento";
DROP TABLE IF EXISTS "Pais";

CREATE TABLE IF NOT EXISTS "Pais" (
    "idPais" serial,
    "nombrePais" varchar(50) not null,
    "isoAlfa2Pais" varchar(2) not null,
    "isoNumericoPais" varchar(3) not null,
    primary key ("idPais")
);

CREATE TABLE IF NOT EXISTS "Departamento" (
    "idDepartamento" serial,
    "idPais" int not null,
    "nombreDepartamento" varchar(50) not null,
    "codigoDepartamento" varchar(5) not null,
    primary key ("idDepartamento"),
    foreign key ("idPais") references "Pais" ("idPais")
);

CREATE TABLE IF NOT EXISTS "Municipio" (
    "idMunicipio" serial,
    "idDepartamento" int not null,
    "nombreMunicipio" varchar(50) not null,
    "codigoMunicipio" varchar(5) not null,
    primary key ("idMunicipio"),
    foreign key ("idDepartamento") references "Departamento" ("idDepartamento")
);

CREATE TABLE IF NOT EXISTS "TipoDocumento" (
    "idTipoDocumento" serial,
    "nombreTipoDocumento" varchar(50) not null,
    "abreviaturaTipoDocumento" varchar(5) not null,
    "estadoTipoDocumento" boolean not null,
    primary key ("idTipoDocumento")
);

CREATE TABLE IF NOT EXISTS "TipoPersona" (
    "idTipoPersona" serial,
    "tipoPersona" varchar(20),
    primary key ("idTipoPersona")
);

CREATE TABLE IF NOT EXISTS "RegimenContribuyente" (
    "idRegimenContribuyente" serial,
    "nombreRegimenContribuyente" varchar(30) not null,
    "responsabilidadRegimenContribuyente" varchar(10) not null,
    primary key ("idRegimenContribuyente")
);

CREATE TABLE IF NOT EXISTS "Rol" (
    "idRol" serial,
    "nombreRol" varchar(50) not null,
    "estadoRol" boolean not null,
    primary key ("idRol")
);


CREATE TABLE IF NOT EXISTS "UbicacionVenta" (
    "idUbicacionVenta" serial,
    "nombreUbicacionVenta" varchar(50) not null,
    "estadoUbicacionVenta" boolean not null,
    primary key ("idUbicacionVenta")
);

CREATE TABLE IF NOT EXISTS "TipoMedioPago" (
    "idTipoMedioPago" serial,
    "nombreTipoMedioPago" varchar(50) not null,
    "estadoTipoMedioPago" boolean not null,
    primary key ("idTipoMedioPago")
);

CREATE TABLE IF NOT EXISTS "Gravamen" (
    "idGravamen" serial,
    "nombreGravamen" varchar(50) not null,
    "estadoGravamen" boolean not null,
    "negativoGravamen" boolean not null,
    "porcentajeGravamen" float not null,
    primary key ("idGravamen")
);

CREATE TABLE IF NOT EXISTS "Categoria" (
    "idCategoria" serial,
    "nombreCategoria" varchar(50) not null,
    "estadoCategoria" boolean not null,
    primary key ("idCategoria")
);

CREATE TABLE IF NOT EXISTS "Empresa" (
    "idEmpresa" serial,
    "idTipoPersona" int not null,
    "idRegimenContribuyente" int not null,
    "idMunicipio" int not null,
    "nitEmpresa" varchar(15) not null unique,
    "digitoVerificacionEmpresa" varchar(3) not null,
    "nombreEmpresa" varchar(250) not null,
    "razonSocialEmpresa" varchar(250) not null,
    "direccionEmpresa" varchar(250) not null,
    "codigoPostalEmpresa" varchar(10) not null,
    "telefonoEmpresa" varchar(15) not null,
    "correoEmpresa" varchar(250) not null,
    "logoEmpresa" varchar(150) not null,
    "estadoEmpresa" boolean not null,
    primary key ("idEmpresa"),
    foreign key ("idTipoPersona") references "TipoPersona" ("idTipoPersona"),
    foreign key ("idRegimenContribuyente") references "RegimenContribuyente" ("idRegimenContribuyente"),
    foreign key ("idMunicipio") references "Municipio" ("idMunicipio")
);

CREATE TABLE IF NOT EXISTS "Caja" (
    "idCaja" serial,
    "idEmpresa" int not null,
    "nombreCaja" varchar(20) not null,
    "estadoCaja" boolean not null,
    primary key ("idCaja"),
    foreign key ("idEmpresa") references "Empresa" ("idEmpresa")
);

CREATE TABLE IF NOT EXISTS "Usuario" (
    "idUsuario" serial,
    "idEmpresa" int not null,
    "idTipoDocumento" int not null,
    "idMunicipio" int not null,
    "idRol" int not null,
    "numeroDocumentoUsuario" varchar(15) not null unique,
    "nombreUsuario" varchar(100) not null,
    "apellidoUsuario" varchar(100) not null,
    "correoUsuario" varchar(250) not null unique,
    "telefonoUsuario" varchar(15) not null unique,
    "direccionUsuario" varchar(250) not null,
    "claveUsuario" varchar(100) not null,
    "estadoUsuario" boolean not null,
    primary key ("idUsuario"),
    foreign key ("idEmpresa") references "Empresa" ("idEmpresa"),
    foreign key ("idTipoDocumento") references "TipoDocumento" ("idTipoDocumento"),
    foreign key ("idMunicipio") references "Municipio" ("idMunicipio"),
    foreign key ("idRol") references "Rol" ("idRol")
);

CREATE TABLE IF NOT EXISTS "Tercero" (
    "idTercero" serial,
    "idEmpresa" int not null,
    "idTipoPersona" int not null,
    "idTipoDocumento" int not null,
    "idMunicipio" int not null,
    "digitoVerificacionTercero" varchar(3) null,
    "razonSocialTercero" varchar(250) null,
    "numeroDocumentoTercero" varchar(15) not null,
    "nombreTercero" varchar(100) not null,
    "apellidoTercero" varchar(100) not null,
    "telefonoTercero" varchar(15) not null,
    "direccionTercero" varchar(250) not null,
    "correoTercero" varchar(250) not null,
    "codigoPostalTercero" varchar(10) null,
    "proveedorTercero" boolean not null,
    "estadoTercero" boolean not null,
    primary key ("idTercero"),
    foreign key ("idEmpresa") references "Empresa" ("idEmpresa"),
    foreign key ("idTipoPersona") references "TipoPersona" ("idTipoPersona"),
    foreign key ("idTipoDocumento") references "TipoDocumento" ("idTipoDocumento"),
    foreign key ("idMunicipio") references "Municipio" ("idMunicipio")
);

CREATE TABLE IF NOT EXISTS "DetalleCaja" (
    "idDetalleCaja" serial,
    "idCaja" int not null,
    "idUsuario" int not null,
    "fechaAperturaDetalleCaja" TIMESTAMP not null,
    "fechaCierreDetalleCaja" TIMESTAMP not null,
    "dineroAperturaDetalleCaja" double precision not null,
    "dineroCierreDetalleCaja" double precision not null,
    primary key ("idDetalleCaja"),
    foreign key ("idCaja") references "Caja" ("idCaja"),
    foreign key ("idUsuario") references "Usuario" ("idUsuario")
);


CREATE TABLE IF NOT EXISTS "Movimiento" (
    "idMovimiento" serial,
    "idUsuario" int not null,
    "idCaja" int not null,
    "descripcionMovimiento" varchar(250) not null,
    "fechaMovimiento" TIMESTAMP not null,
    "valorMovimiento" double precision not null,
    primary key ("idMovimiento"),
    foreign key ("idUsuario") references "Usuario" ("idUsuario"),
    foreign key ("idCaja") references "Caja" ("idCaja")
);

CREATE TABLE IF NOT EXISTS "Compra" (
    "idCompra" serial,
    "idTercero" int not null,
    "idUsuario" int not null,
    "fechaCompra" TIMESTAMP not null,
    "observacionCompra" varchar(250) not null,
    primary key ("idCompra"),
    foreign key ("idTercero") references "Tercero" ("idTercero"),
    foreign key ("idUsuario") references "Usuario" ("idUsuario")
);

CREATE TABLE IF NOT EXISTS "Venta" (
    "idVenta" serial,
    "idTercero" int not null,
    "idCaja" int not null,
    "idUsuario" int not null,
    "idUbicacionVenta" int not null,
    "fechaVenta" TIMESTAMP not null,
    "observacionVenta" varchar(250) not null,
    primary key ("idVenta"),
    foreign key ("idTercero") references "Tercero" ("idTercero"),
    foreign key ("idCaja") references "Caja" ("idCaja"),
    foreign key ("idUsuario") references "Usuario" ("idUsuario"),
    foreign key ("idUbicacionVenta") references "UbicacionVenta" ("idUbicacionVenta")
);

CREATE TABLE IF NOT EXISTS "MedioPago" (
    "idMedioPago" serial,
    "idVenta" int not null,
    "idTipoMedioPago" int not null,
    "valorTotalMedioPago" double precision not null,
    "estadoMedioPago" boolean not null,
    primary key ("idMedioPago"),
    foreign key ("idVenta") references "Venta" ("idVenta"),
    foreign key ("idTipoMedioPago") references "TipoMedioPago" ("idTipoMedioPago")
);

CREATE TABLE IF NOT EXISTS "Producto" (
    "idProducto" serial,
    "idEmpresa" int not null,
    "idCategoria" int not null,
    "codigoBarrasProducto" varchar(50) not null,
    "nombreProducto" varchar(50) not null,
    "descripcionProducto" varchar(250) not null,
    "precioVentaProducto" double precision not null,
    "stockMinimoProducto" int not null,
    "stockMaximoProducto" int not null,
    "stockProducto" int not null,
    "estadoProducto" boolean not null,
    primary key ("idProducto"),
    foreign key ("idEmpresa") references "Empresa" ("idEmpresa"),
    foreign key ("idCategoria") references "Categoria" ("idCategoria")
);

CREATE TABLE IF NOT EXISTS "TerceroProducto" (
    "idTerceroProducto" serial,
    "idTercero" int not null,
    "idProducto" int not null,
    "precioCompraTerceroProducto" double precision not null,
    "porcentajeDescuentoDetalleVenta" float not null,
    primary key ("idTerceroProducto"),
    foreign key ("idTercero") references "Tercero" ("idTercero"),
    foreign key ("idProducto") references "Producto" ("idProducto")
);

CREATE TABLE IF NOT EXISTS "DetalleCompra" (
    "idDetalleCompra" serial,
    "idCompra" int not null,
    "idProducto" int not null,
    "cantidadDetalleCompra" int not null,
    "valorDetalleCompra" double precision not null,
    "fechaVencimientoDetalleCompra" date not null,
    primary key ("idDetalleCompra"),
    foreign key ("idCompra") references "Compra" ("idCompra"),
    foreign key ("idProducto") references "Producto" ("idProducto")
);

CREATE TABLE IF NOT EXISTS "DetalleVenta" (
    "idDetalleVenta" serial,
    "idVenta" int not null,
    "idProducto" int not null,
    "idGravamen" int not null,
    "cantidadDetalleVenta" int not null,
    "valorDescuentoDetalleVenta" double precision not null,
    "valorTotalDetalleVenta" double precision not null,
    primary key ("idDetalleVenta"),
    foreign key ("idVenta") references "Venta" ("idVenta"),
    foreign key ("idProducto") references "Producto" ("idProducto"),
    foreign key ("idGravamen") references "Gravamen" ("idGravamen")
);

CREATE TABLE IF NOT EXISTS "GravamenProducto" (
    "idGravamenProducto" serial,
    "idProducto" int not null,
    "idGravamen" int not null,
    "indicadorCompraGravamenProducto" boolean not null,
    "indicadorVentaGravamenProducto" boolean not null,
    primary key ("idGravamenProducto"),
    foreign key ("idProducto") references "Producto" ("idProducto"),
    foreign key ("idGravamen") references "Gravamen" ("idGravamen")
);

CREATE TABLE IF NOT EXISTS "Historial" (
    "idHistorial" serial,
    "nombreTabla" varchar not null,
    "accion" varchar not null,
    "descripcion" varchar not null,
    "usuario" varchar not null,
    "fecha" TIMESTAMP,
    primary key ("idHistorial")
);


export interface ProductoDTO {
    idProducto: number,
    idEmpresa: number,
    idCategoria: number,
    codigoBarrasProducto: string,
    nombreProducto: string,
    descripcionProducto: string,
    precioVentaProducto: number,
    stockMinimo: number,
    stockMaximo: number,
    stockProducto: number,
    estadoProducto: boolean
}
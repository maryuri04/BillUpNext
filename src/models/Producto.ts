export class Producto{
    private idProducto: number = 0;
    private idEmpresa: number = 0;
    private idCategoria: number = 0;
    private codigoBarrasProducto: string = "";
    private nombreProducto: string = "";
    private descripcionProducto: string = "";
    private precioVentaProducto: number = 0;
    private stockMinimoProducto: number = 0;
    private stockMaximoProducto: number = 0;
    private stockProducto: number = 0;
    private estadoProducto: boolean = true;

    constructor(idProducto: number, idEmpresa: number, idCategoria: number, codigoBarrasProducto: string, nombreProducto: string, descripcionProducto: string, precioVentaProducto: number, stockMinimoProducto: number, stockMaximoProducto: number, stockProducto: number, estadoProducto: boolean){
        this.idProducto = idProducto;
        this.idEmpresa = idEmpresa;
        this.idCategoria = idCategoria;
        this.codigoBarrasProducto = codigoBarrasProducto;
        this.nombreProducto = nombreProducto;
        this.descripcionProducto = descripcionProducto;
        this.precioVentaProducto = precioVentaProducto;
        this.stockMinimoProducto = stockMinimoProducto;
        this.stockMaximoProducto = stockMaximoProducto;
        this.stockProducto = stockProducto;
        this.estadoProducto = estadoProducto;
    }


    /**
     * Getter idProducto
     * @return {number }
     */
	public getIdProducto(): number  {
		return this.idProducto;
	}

    /**
     * Getter idEmpresa
     * @return {number }
     */
	public getIdEmpresa(): number  {
		return this.idEmpresa;
	}

    /**
     * Getter idCategoria
     * @return {number }
     */
	public getIdCategoria(): number  {
		return this.idCategoria;
	}

    /**
     * Getter codigoBarrasProducto
     * @return {string }
     */
	public getCodigoBarrasProducto(): string  {
		return this.codigoBarrasProducto;
	}

    /**
     * Getter nombreProducto
     * @return {string }
     */
	public getNombreProducto(): string  {
		return this.nombreProducto;
	}

    /**
     * Getter descripcionProducto
     * @return {string }
     */
	public getDescripcionProducto(): string  {
		return this.descripcionProducto;
	}

    /**
     * Getter precioVentaProducto
     * @return {number }
     */
	public getPrecioVentaProducto(): number  {
		return this.precioVentaProducto;
	}

    /**
     * Getter stockMinimoProducto
     * @return {number }
     */
	public getStockMinimoProducto(): number  {
		return this.stockMinimoProducto;
	}

    /**
     * Getter stockMaximoProducto
     * @return {number }
     */
	public getStockMaximoProducto(): number  {
		return this.stockMaximoProducto;
	}

    /**
     * Getter stockProducto
     * @return {number }
     */
	public getStockProducto(): number  {
		return this.stockProducto;
	}

    /**
     * Getter estadoProducto
     * @return {boolean }
     */
	public getEstadoProducto(): boolean  {
		return this.estadoProducto;
	}

    /**
     * Setter idProducto
     * @param {number } value
     */
	public setIdProducto(value: number ) {
		this.idProducto = value;
	}

    /**
     * Setter idEmpresa
     * @param {number } value
     */
	public setIdEmpresa(value: number ) {
		this.idEmpresa = value;
	}

    /**
     * Setter idCategoria
     * @param {number } value
     */
	public setIdCategoria(value: number ) {
		this.idCategoria = value;
	}

    /**
     * Setter codigoBarrasProducto
     * @param {string } value
     */
	public setCodigoBarrasProducto(value: string ) {
		this.codigoBarrasProducto = value;
	}

    /**
     * Setter nombreProducto
     * @param {string } value
     */
	public setNombreProducto(value: string ) {
		this.nombreProducto = value;
	}

    /**
     * Setter descripcionProducto
     * @param {string } value
     */
	public setDescripcionProducto(value: string ) {
		this.descripcionProducto = value;
	}

    /**
     * Setter precioVentaProducto
     * @param {number } value
     */
	public setPrecioVentaProducto(value: number ) {
		this.precioVentaProducto = value;
	}

    /**
     * Setter stockMinimoProducto
     * @param {number } value
     */
	public setStockMinimoProducto(value: number ) {
		this.stockMinimoProducto = value;
	}

    /**
     * Setter stockMaximoProducto
     * @param {number } value
     */
	public setStockMaximoProducto(value: number ) {
		this.stockMaximoProducto = value;
	}

    /**
     * Setter stockProducto
     * @param {number } value
     */
	public setStockProducto(value: number ) {
		this.stockProducto = value;
	}

    /**
     * Setter estadoProducto
     * @param {boolean } value
     */
	public setEstadoProducto(value: boolean ) {
		this.estadoProducto = value;
	}

}
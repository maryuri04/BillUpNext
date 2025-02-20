export class DetalleCompra{
    private idDetalleCompra: number = 0;
    private idCompra: number = 0;
    private idProducto: number = 0;
    private cantidadDetalleCompra: number = 0;
    private valorDetalleCompra: number = 0;
    private fechaVencimientoDetalleCompra: Date = new Date();

    constructor(idDetalleCompra: number, idCompra: number, idProducto: number, cantidad: number, valorDetalleCompra: number, fechaVencimiento: Date){
        this.idDetalleCompra = idDetalleCompra;
        this.idCompra = idCompra;
        this.idProducto = idProducto;
        this.cantidadDetalleCompra = cantidad;
        this.valorDetalleCompra = valorDetalleCompra;
        this.fechaVencimientoDetalleCompra = fechaVencimiento;
    }

    /**
     * Getter idDetalleCompra
     * @return {number }
     */
	public getIdDetalleCompra(): number  {
		return this.idDetalleCompra;
	}

    /**
     * Getter idCompra
     * @return {number }
     */
	public getIdCompra(): number  {
		return this.idCompra;
	}

    /**
     * Getter idProducto
     * @return {number }
     */
	public getIdProducto(): number  {
		return this.idProducto;
	}

    /**
     * Getter cantidad
     * @return {number }
     */
	public getCantidad(): number  {
		return this.cantidadDetalleCompra;
	}

    /**
     * Getter valorDetalleCompra
     * @return {number }
     */
	public getValorDetalleCompra(): number  {
		return this.valorDetalleCompra;
	}

    /**
     * Getter fechaVencimiento
     * @return {Date }
     */
	public getFechaVencimiento(): Date  {
		return this.fechaVencimientoDetalleCompra;
	}

    /**
     * Setter idDetalleCompra
     * @param {number } value
     */
	public setIdDetalleCompra(value: number ) {
		this.idDetalleCompra = value;
	}

    /**
     * Setter idCompra
     * @param {number } value
     */
	public setIdCompra(value: number ) {
		this.idCompra = value;
	}

    /**
     * Setter idProducto
     * @param {number } value
     */
	public setIdProducto(value: number ) {
		this.idProducto = value;
	}

    /**
     * Setter cantidad
     * @param {number } value
     */
	public setCantidad(value: number ) {
		this.cantidadDetalleCompra = value;
	}

    /**
     * Setter valorDetalleCompra
     * @param {number } value
     */
	public setValorDetalleCompra(value: number ) {
		this.valorDetalleCompra = value;
	}

    /**
     * Setter fechaVencimiento
     * @param {Date } value
     */
	public setFechaVencimiento(value: Date ) {
		this.fechaVencimientoDetalleCompra = value;
	}

}
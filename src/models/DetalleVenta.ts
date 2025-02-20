export class DetalleVenta{
    private idDetalleVenta: number = 0;
    private idVenta: number = 0;
    private idProducto: number = 0;
    private idGravamen: number = 0;
    private cantidadDetalleVenta: number = 0;
    private valorDescuentoDetalleVenta: number = 0;
    private valorTotalDetalleVenta: number = 0;

    constructor(idDetalleVenta: number, idVenta: number, idProducto: number, idGravamen: number, cantidadDetalleVenta: number, valorDescuentoDetalleVenta: number, valorTotalDetalleVenta: number){
        this.idDetalleVenta = idDetalleVenta;
        this.idVenta = idVenta;
        this.idProducto = idProducto;
        this.idGravamen = idGravamen;
        this.cantidadDetalleVenta = cantidadDetalleVenta;
        this.valorDescuentoDetalleVenta = valorDescuentoDetalleVenta;
        this.valorTotalDetalleVenta = valorTotalDetalleVenta;
    }

    /**
     * Getter idDetalleVenta
     * @return {number }
     */
	public getIdDetalleVenta(): number  {
		return this.idDetalleVenta;
	}

    /**
     * Getter idVenta
     * @return {number }
     */
	public getIdVenta(): number  {
		return this.idVenta;
	}

    /**
     * Getter idProducto
     * @return {number }
     */
	public getIdProducto(): number  {
		return this.idProducto;
	}

    /**
     * Getter idGravamen
     * @return {number }
     */
	public getIdGravamen(): number  {
		return this.idGravamen;
	}

    /**
     * Getter cantidadDetalleVenta
     * @return {number }
     */
	public getCantidadDetalleVenta(): number  {
		return this.cantidadDetalleVenta;
	}

    /**
     * Getter valorDescuentoDetalleVenta
     * @return {number }
     */
	public getValorDescuentoDetalleVenta(): number  {
		return this.valorDescuentoDetalleVenta;
	}

    /**
     * Getter valorTotalDetalleVenta
     * @return {number }
     */
	public getValorTotalDetalleVenta(): number  {
		return this.valorTotalDetalleVenta;
	}

    /**
     * Setter idDetalleVenta
     * @param {number } value
     */
	public setIdDetalleVenta(value: number ) {
		this.idDetalleVenta = value;
	}

    /**
     * Setter idVenta
     * @param {number } value
     */
	public setIdVenta(value: number ) {
		this.idVenta = value;
	}

    /**
     * Setter idProducto
     * @param {number } value
     */
	public setIdProducto(value: number ) {
		this.idProducto = value;
	}

    /**
     * Setter idGravamen
     * @param {number } value
     */
	public setIdGravamen(value: number ) {
		this.idGravamen = value;
	}

    /**
     * Setter cantidadDetalleVenta
     * @param {number } value
     */
	public setCantidadDetalleVenta(value: number ) {
		this.cantidadDetalleVenta = value;
	}

    /**
     * Setter valorDescuentoDetalleVenta
     * @param {number } value
     */
	public setValorDescuentoDetalleVenta(value: number ) {
		this.valorDescuentoDetalleVenta = value;
	}

    /**
     * Setter valorTotalDetalleVenta
     * @param {number } value
     */
	public setValorTotalDetalleVenta(value: number ) {
		this.valorTotalDetalleVenta = value;
	}

    
}

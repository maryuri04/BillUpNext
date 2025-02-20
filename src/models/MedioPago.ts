export class MedioPago{
    private idMedioPago: number = 0;
    private idVenta: number = 0;
    private idTipoMedioPago: number = 0;
    private valorTotalMedioPago: number = 0;

    constructor(idMedioPago: number, idVenta: number, idTipoMedioPago: number, valorTotalMedioPago: number){
        this.idMedioPago = idMedioPago;
        this.idVenta = idVenta;
        this.idTipoMedioPago = idTipoMedioPago;
        this.valorTotalMedioPago = valorTotalMedioPago;
    }

    /**
     * Getter idMedioPago
     * @return {number }
     */
	public getIdMedioPago(): number  {
		return this.idMedioPago;
	}

    /**
     * Getter idVenta
     * @return {number }
     */
	public getIdVenta(): number  {
		return this.idVenta;
	}

    /**
     * Getter idTipoMedioPago
     * @return {number }
     */
	public getIdTipoMedioPago(): number  {
		return this.idTipoMedioPago;
	}

    /**
     * Getter valorTotalMedioPago
     * @return {number }
     */
	public getValorTotalMedioPago(): number  {
		return this.valorTotalMedioPago;
	}

    /**
     * Setter idMedioPago
     * @param {number } value
     */
	public setIdMedioPago(value: number ) {
		this.idMedioPago = value;
	}

    /**
     * Setter idVenta
     * @param {number } value
     */
	public setIdVenta(value: number ) {
		this.idVenta = value;
	}

    /**
     * Setter idTipoMedioPago
     * @param {number } value
     */
	public setIdTipoMedioPago(value: number ) {
		this.idTipoMedioPago = value;
	}

    /**
     * Setter valorTotalMedioPago
     * @param {number } value
     */
	public setValorTotalMedioPago(value: number ) {
		this.valorTotalMedioPago = value;
	}

}
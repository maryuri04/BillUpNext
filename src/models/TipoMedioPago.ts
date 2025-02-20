export class TipoMedioPago{
    private idTipoMedioPago: number = 0;
    private nombreTipoMedioPago: string = "";
    private estadoTipoMedioPago: boolean = true;

    constructor(idTipoMedioPago: number, nombreTipoMedioPago: string, estadoTipoMedioPago: boolean){
        this.idTipoMedioPago = idTipoMedioPago;
        this.nombreTipoMedioPago = nombreTipoMedioPago;
        this.estadoTipoMedioPago = estadoTipoMedioPago;
    }


    /**
     * Getter idTipoMedioPago
     * @return {number }
     */
	public getIdTipoMedioPago(): number  {
		return this.idTipoMedioPago;
	}

    /**
     * Getter nombreTipoMedioPago
     * @return {string }
     */
	public getNombreTipoMedioPago(): string  {
		return this.nombreTipoMedioPago;
	}

    /**
     * Getter estadoTipoMedioPago
     * @return {boolean }
     */
	public getEstadoTipoMedioPago(): boolean  {
		return this.estadoTipoMedioPago;
	}

    /**
     * Setter idTipoMedioPago
     * @param {number } value
     */
	public setIdTipoMedioPago(value: number ) {
		this.idTipoMedioPago = value;
	}

    /**
     * Setter nombreTipoMedioPago
     * @param {string } value
     */
	public setNombreTipoMedioPago(value: string ) {
		this.nombreTipoMedioPago = value;
	}

    /**
     * Setter estadoTipoMedioPago
     * @param {boolean } value
     */
	public setEstadoTipoMedioPago(value: boolean ) {
		this.estadoTipoMedioPago = value;
	}

}
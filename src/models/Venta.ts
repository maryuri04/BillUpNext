export class Venta{
    private idVenta: number = 0;
    private idTercero: number = 0;
    private idCaja: number = 0;
    private idUsuario: number = 0;
    private idUbicacionVenta: number = 0;
    private fechaVenta: number = 0;
    private observacionVenta: string = "";

    constructor(idVenta: number, idTercero: number, idCaja: number, idUsuario: number, idUbicacionVenta: number, fechaVenta: number, observacionVenta: string){
        this.idVenta = idVenta;
        this.idTercero = idTercero;
        this.idCaja = idCaja;
        this.idUsuario = idUsuario;
        this.idUbicacionVenta = idUbicacionVenta;
        this.fechaVenta = fechaVenta;
        this.observacionVenta = observacionVenta;
    }

    /**
     * Getter idVenta
     * @return {number }
     */
	public getIdVenta(): number  {
		return this.idVenta;
	}

    /**
     * Getter idTercero
     * @return {number }
     */
	public getIdTercero(): number  {
		return this.idTercero;
	}

    /**
     * Getter idCaja
     * @return {number }
     */
	public getIdCaja(): number  {
		return this.idCaja;
	}

    /**
     * Getter idUsuario
     * @return {number }
     */
	public getIdUsuario(): number  {
		return this.idUsuario;
	}

    /**
     * Getter idUbicacionVenta
     * @return {number }
     */
	public getIdUbicacionVenta(): number  {
		return this.idUbicacionVenta;
	}

    /**
     * Getter fechaVenta
     * @return {number }
     */
	public getFechaVenta(): number  {
		return this.fechaVenta;
	}

    /**
     * Getter observacionVenta
     * @return {string }
     */
	public getObservacionVenta(): string  {
		return this.observacionVenta;
	}

    /**
     * Setter idVenta
     * @param {number } value
     */
	public setIdVenta(value: number ) {
		this.idVenta = value;
	}

    /**
     * Setter idTercero
     * @param {number } value
     */
	public setIdTercero(value: number ) {
		this.idTercero = value;
	}

    /**
     * Setter idCaja
     * @param {number } value
     */
	public setIdCaja(value: number ) {
		this.idCaja = value;
	}

    /**
     * Setter idUsuario
     * @param {number } value
     */
	public setIdUsuario(value: number ) {
		this.idUsuario = value;
	}

    /**
     * Setter idUbicacionVenta
     * @param {number } value
     */
	public setIdUbicacionVenta(value: number ) {
		this.idUbicacionVenta = value;
	}

    /**
     * Setter fechaVenta
     * @param {number } value
     */
	public setFechaVenta(value: number ) {
		this.fechaVenta = value;
	}

    /**
     * Setter observacionVenta
     * @param {string } value
     */
	public setObservacionVenta(value: string ) {
		this.observacionVenta = value;
	}
    
}

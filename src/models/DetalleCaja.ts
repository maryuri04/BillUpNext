export class DetalleCaja{
    private idDetalleCaja: number = 0;
    private idCaja: number = 0;
    private idUsuario: number = 0;
    private fechaAperturaDetalleCaja: number = 0;
    private fechaCierreDetalleCaja: number = 0;
    private dineroAperturaDetalleCaja: number = 0;
    private dineroCierreDetalleCaja: number = 0;

    constructor(idDetalleCaja: number, idCaja: number, idUsuario: number, fechaAperturaDetalleCaja: number,  dineroAperturaDetalleCaja: number, fechaCierreDetalleCaja?: number,dineroCierreDetalleCaja?: number){
        this.idDetalleCaja = idDetalleCaja;
        this.idCaja = idCaja;
        this.idUsuario = idUsuario;
        this.fechaAperturaDetalleCaja = fechaAperturaDetalleCaja;
        this.dineroAperturaDetalleCaja = dineroAperturaDetalleCaja;
        if(fechaCierreDetalleCaja != undefined){
            this.fechaCierreDetalleCaja = fechaCierreDetalleCaja;
        }
        if(dineroCierreDetalleCaja != undefined){
            this.dineroCierreDetalleCaja = dineroCierreDetalleCaja;
        }
    }


    /**
     * Getter idDetalleCaja
     * @return {number }
     */
	public getIdDetalleCaja(): number  {
		return this.idDetalleCaja;
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
     * Getter fechaAperturaDetalleCaja
     * @return {number }
     */
	public getFechaAperturaDetalleCaja(): number  {
		return this.fechaAperturaDetalleCaja;
	}

    /**
     * Getter fechaCierreDetalleCaja
     * @return {number }
     */
	public getFechaCierreDetalleCaja(): number  {
		return this.fechaCierreDetalleCaja;
	}

    /**
     * Getter dineroAperturaDetalleCaja
     * @return {number }
     */
	public getDineroAperturaDetalleCaja(): number  {
		return this.dineroAperturaDetalleCaja;
	}

    /**
     * Getter dineroCierreDetalleCaja
     * @return {number }
     */
	public getDineroCierreDetalleCaja(): number  {
		return this.dineroCierreDetalleCaja;
	}

    /**
     * Setter idDetalleCaja
     * @param {number } value
     */
	public setIdDetalleCaja(value: number ) {
		this.idDetalleCaja = value;
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
     * Setter fechaAperturaDetalleCaja
     * @param {number } value
     */
	public setFechaAperturaDetalleCaja(value: number ) {
		this.fechaAperturaDetalleCaja = value;
	}

    /**
     * Setter fechaCierreDetalleCaja
     * @param {number } value
     */
	public setFechaCierreDetalleCaja(value: number ) {
		this.fechaCierreDetalleCaja = value;
	}

    /**
     * Setter dineroAperturaDetalleCaja
     * @param {number } value
     */
	public setDineroAperturaDetalleCaja(value: number ) {
		this.dineroAperturaDetalleCaja = value;
	}

    /**
     * Setter dineroCierreDetalleCaja
     * @param {number } value
     */
	public setDineroCierreDetalleCaja(value: number ) {
		this.dineroCierreDetalleCaja = value;
	}
    
}
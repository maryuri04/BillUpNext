export class Movimiento{
    private idMovimiento: number = 0;
    private idUsuario: number = 0;
    private idCaja: number = 0;
    private descripcionMovimiento: string = "";
    private fechaMovimiento: number = 0;
    private valorMovimiento: number = 0;

    constructor(idMovimiento: number, idUsuario: number, idCaja: number, descripcionMovimiento: string, fechaMovimiento: number, valorMovimiento: number){
        this.idMovimiento = idMovimiento;
        this.idUsuario = idUsuario;
        this.idCaja = idCaja;
        this.descripcionMovimiento = descripcionMovimiento;
        this.fechaMovimiento = fechaMovimiento;
        this.valorMovimiento = valorMovimiento;
    }

    /**
     * Getter idMovimiento
     * @return {number }
     */
	public getIdMovimiento(): number  {
		return this.idMovimiento;
	}

    /**
     * Getter idUsuario
     * @return {number }
     */
	public getIdUsuario(): number  {
		return this.idUsuario;
	}

    /**
     * Getter idCaja
     * @return {number }
     */
	public getIdCaja(): number  {
		return this.idCaja;
	}

    /**
     * Getter descripcionMovimiento
     * @return {string }
     */
	public getDescripcionMovimiento(): string  {
		return this.descripcionMovimiento;
	}

    /**
     * Getter fechaMovimiento
     * @return {number }
     */
	public getFechaMovimiento(): number  {
		return this.fechaMovimiento;
	}

    /**
     * Getter valorMovimiento
     * @return {number }
     */
	public getValorMovimiento(): number  {
		return this.valorMovimiento;
	}

    /**
     * Setter idMovimiento
     * @param {number } value
     */
	public setIdMovimiento(value: number ) {
		this.idMovimiento = value;
	}

    /**
     * Setter idUsuario
     * @param {number } value
     */
	public setIdUsuario(value: number ) {
		this.idUsuario = value;
	}

    /**
     * Setter idCaja
     * @param {number } value
     */
	public setIdCaja(value: number ) {
		this.idCaja = value;
	}

    /**
     * Setter descripcionMovimiento
     * @param {string } value
     */
	public setDescripcionMovimiento(value: string ) {
		this.descripcionMovimiento = value;
	}

    /**
     * Setter fechaMovimiento
     * @param {number } value
     */
	public setFechaMovimiento(value: number ) {
		this.fechaMovimiento = value;
	}

    /**
     * Setter valorMovimiento
     * @param {number } value
     */
	public setValorMovimiento(value: number ) {
		this.valorMovimiento = value;
	}

}
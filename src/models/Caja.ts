export class Caja{
    private idCaja: number = 0;
    private idEmpresa: number = 0;
    private nombreCaja: string = "";
    private estadoCaja: boolean = true;

    constructor(idCaja: number, idEmpresa: number, nombreCaja: string, estadoCaja: boolean){
        this.idCaja = idCaja;
        this.idEmpresa = idEmpresa;
        this.nombreCaja = nombreCaja;
        this.estadoCaja = estadoCaja;
    }

    /**
     * Getter idCaja
     * @return {number }
     */
	public getIdCaja(): number  {
		return this.idCaja;
	}

    /**
     * Getter idEmpresa
     * @return {number }
     */
	public getIdEmpresa(): number  {
		return this.idEmpresa;
	}

    /**
     * Getter nombreCaja
     * @return {string }
     */
	public getNombreCaja(): string  {
		return this.nombreCaja;
	}

    /**
     * Getter estadoCaja
     * @return {boolean }
     */
	public getEstadoCaja(): boolean  {
		return this.estadoCaja;
	}

    /**
     * Setter idCaja
     * @param {number } value
     */
	public setIdCaja(value: number ) {
		this.idCaja = value;
	}

    /**
     * Setter idEmpresa
     * @param {number } value
     */
	public setIdEmpresa(value: number ) {
		this.idEmpresa = value;
	}

    /**
     * Setter nombreCaja
     * @param {string } value
     */
	public setNombreCaja(value: string ) {
		this.nombreCaja = value;
	}

    /**
     * Setter estadoCaja
     * @param {boolean } value
     */
	public setEstadoCaja(value: boolean ) {
		this.estadoCaja = value;
	}

}
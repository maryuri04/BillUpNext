export class Gravamen{
    private idGravamen: number = 0;
    private nombreGravamen: string = "";
    private estadoGravamen: boolean = true;
    private negativoGravamen: boolean = false;
    private porcentajeGravamen: number = 0;

    constructor(idGravamen: number, nombreGravamen: string, estadoGravamen: boolean, negativoGravamen: boolean, porcentajeGravamen: number){
        this.idGravamen = idGravamen;
        this.nombreGravamen = nombreGravamen;
        this.estadoGravamen = estadoGravamen;
        this.negativoGravamen = negativoGravamen;
        this.porcentajeGravamen = porcentajeGravamen;
    }


    /**
     * Getter idGravamen
     * @return {number }
     */
	public getIdGravamen(): number  {
		return this.idGravamen;
	}

    /**
     * Getter nombreGravamen
     * @return {string }
     */
	public getNombreGravamen(): string  {
		return this.nombreGravamen;
	}

    /**
     * Getter estadoGravamen
     * @return {boolean }
     */
	public getEstadoGravamen(): boolean  {
		return this.estadoGravamen;
	}

    /**
     * Getter negativoGravamen
     * @return {boolean }
     */
	public getNegativoGravamen(): boolean  {
		return this.negativoGravamen;
	}

    /**
     * Getter porcentajeGravamen
     * @return {number }
     */
	public getPorcentajeGravamen(): number  {
		return this.porcentajeGravamen;
	}

    /**
     * Setter idGravamen
     * @param {number } value
     */
	public setIdGravamen(value: number ) {
		this.idGravamen = value;
	}

    /**
     * Setter nombreGravamen
     * @param {string } value
     */
	public setNombreGravamen(value: string ) {
		this.nombreGravamen = value;
	}

    /**
     * Setter estadoGravamen
     * @param {boolean } value
     */
	public setEstadoGravamen(value: boolean ) {
		this.estadoGravamen = value;
	}

    /**
     * Setter negativoGravamen
     * @param {boolean } value
     */
	public setNegativoGravamen(value: boolean ) {
		this.negativoGravamen = value;
	}

    /**
     * Setter porcentajeGravamen
     * @param {number } value
     */
	public setPorcentajeGravamen(value: number ) {
		this.porcentajeGravamen = value;
	}

}
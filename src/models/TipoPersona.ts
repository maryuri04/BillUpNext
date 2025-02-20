export class TipoPersona{
    private idTipoPersona: number = 0;
    private tipoPersona: string = "";

    constructor(idTipoPersona: number, tipoPersona: string){
        this.idTipoPersona = idTipoPersona;
        this.tipoPersona = tipoPersona;
    }


    /**
     * Getter idTipoPersona
     * @return {number }
     */
	public getIdTipoPersona(): number  {
		return this.idTipoPersona;
	}

    /**
     * Getter tipoPersona
     * @return {string }
     */
	public getTipoPersona(): string  {
		return this.tipoPersona;
	}

    /**
     * Setter idTipoPersona
     * @param {number } value
     */
	public setIdTipoPersona(value: number ) {
		this.idTipoPersona = value;
	}

    /**
     * Setter tipoPersona
     * @param {string } value
     */
	public setTipoPersona(value: string ) {
		this.tipoPersona = value;
	}

}
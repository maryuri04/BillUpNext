export class Rol{
    private idRol: number = 0;
    private nombreRol: string = "";
    private estadoRol: boolean = true;

    constructor(idRol: number, nombreRol: string, estadoRol: boolean){
        this.idRol = idRol;
        this.nombreRol = nombreRol;
        this.estadoRol = estadoRol;
    }


    /**
     * Getter idRol
     * @return {number }
     */
	public getIdRol(): number  {
		return this.idRol;
	}

    /**
     * Getter nombreRol
     * @return {string }
     */
	public getNombreRol(): string  {
		return this.nombreRol;
	}

    /**
     * Getter estadoRol
     * @return {boolean }
     */
	public getEstadoRol(): boolean  {
		return this.estadoRol;
	}

    /**
     * Setter idRol
     * @param {number } value
     */
	public setIdRol(value: number ) {
		this.idRol = value;
	}

    /**
     * Setter nombreRol
     * @param {string } value
     */
	public setNombreRol(value: string ) {
		this.nombreRol = value;
	}

    /**
     * Setter estadoRol
     * @param {boolean } value
     */
	public setEstadoRol(value: boolean ) {
		this.estadoRol = value;
	}

}
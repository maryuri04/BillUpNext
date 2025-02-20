export class Categoria{
    private idCategoria: number = 0;
    private nombreCategoria: string = "";
    private estadoCategoria: boolean = true;

    constructor(idCategoria: number, nombreCategoria: string, estadoCategoria: boolean){
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
        this.estadoCategoria = estadoCategoria;
    }


    /**
     * Getter idCategoria
     * @return {number }
     */
	public getIdCategoria(): number  {
		return this.idCategoria;
	}

    /**
     * Getter nombreCategoria
     * @return {string }
     */
	public getNombreCategoria(): string  {
		return this.nombreCategoria;
	}

    /**
     * Getter estadoCategoria
     * @return {boolean }
     */
	public getEstadoCategoria(): boolean  {
		return this.estadoCategoria;
	}

    /**
     * Setter idCategoria
     * @param {number } value
     */
	public setIdCategoria(value: number ) {
		this.idCategoria = value;
	}

    /**
     * Setter nombreCategoria
     * @param {string } value
     */
	public setNombreCategoria(value: string ) {
		this.nombreCategoria = value;
	}

    /**
     * Setter estadoCategoria
     * @param {boolean } value
     */
	public setEstadoCategoria(value: boolean ) {
		this.estadoCategoria = value;
	}

}
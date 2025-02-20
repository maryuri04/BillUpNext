export class UbicacionVenta{
    private idUbicacionVenta: number = 0;
    private nombreUbicacionVenta: string = "";
    private estadoUbicacionVenta: boolean = true;

    constructor(idUbicacionVenta: number, nombreUbicacionVenta: string, estadoUbicacionVenta: boolean){
        this.idUbicacionVenta = idUbicacionVenta;
        this.nombreUbicacionVenta = nombreUbicacionVenta;
        this.estadoUbicacionVenta = estadoUbicacionVenta;
    }


    /**
     * Getter idUbicacionVenta
     * @return {number }
     */
	public getIdUbicacionVenta(): number  {
		return this.idUbicacionVenta;
	}

    /**
     * Getter nombreUbicacionVenta
     * @return {string }
     */
	public getNombreUbicacionVenta(): string  {
		return this.nombreUbicacionVenta;
	}

    /**
     * Getter estadoUbicacionVenta
     * @return {boolean }
     */
	public getEstadoUbicacionVenta(): boolean  {
		return this.estadoUbicacionVenta;
	}

    /**
     * Setter idUbicacionVenta
     * @param {number } value
     */
	public setIdUbicacionVenta(value: number ) {
		this.idUbicacionVenta = value;
	}

    /**
     * Setter nombreUbicacionVenta
     * @param {string } value
     */
	public setNombreUbicacionVenta(value: string ) {
		this.nombreUbicacionVenta = value;
	}

    /**
     * Setter estadoUbicacionVenta
     * @param {boolean } value
     */
	public setEstadoUbicacionVenta(value: boolean ) {
		this.estadoUbicacionVenta = value;
	}

}
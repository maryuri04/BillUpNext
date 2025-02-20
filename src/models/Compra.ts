export class Compra{
    private idCompra: number = 0;
    private idTercero: number = 0;
    private idUsuario: number = 0;
    private fechaCompra: number = 0;
    private observacionCompra: string = "";

    constructor (idCompra: number, idTercero: number, idUsuario: number, fechaCompra: number, observacionCompra: string){
        this.idCompra = idCompra;
        this.idTercero = idTercero;
        this.idUsuario = idUsuario;
        this.fechaCompra = fechaCompra;
        this.observacionCompra = observacionCompra;
    }

    /**
     * Getter idCompra
     * @return {number }
     */
	public getIdCompra(): number  {
		return this.idCompra;
	}

    /**
     * Getter idTercero
     * @return {number }
     */
	public getIdTercero(): number  {
		return this.idTercero;
	}

    /**
     * Getter idUsuario
     * @return {number }
     */
	public getIdUsuario(): number  {
		return this.idUsuario;
	}

    /**
     * Getter fechaCompra
     * @return {number }
     */
	public getFechaCompra(): number  {
		return this.fechaCompra;
	}

    /**
     * Getter observacionCompra
     * @return {string }
     */
	public getObservacionCompra(): string  {
		return this.observacionCompra;
	}

    /**
     * Setter idCompra
     * @param {number } value
     */
	public setIdCompra(value: number ) {
		this.idCompra = value;
	}

    /**
     * Setter idTercero
     * @param {number } value
     */
	public setIdTercero(value: number ) {
		this.idTercero = value;
	}

    /**
     * Setter idUsuario
     * @param {number } value
     */
	public setIdUsuario(value: number ) {
		this.idUsuario = value;
	}

    /**
     * Setter fechaCompra
     * @param {number } value
     */
	public setFechaCompra(value: number ) {
		this.fechaCompra = value;
	}

    /**
     * Setter observacionCompra
     * @param {string } value
     */
	public setObservacionCompra(value: string ) {
		this.observacionCompra = value;
	}

}
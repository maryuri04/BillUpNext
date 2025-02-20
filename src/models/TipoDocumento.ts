export class TipoDocumento{
    private idTipoDocumento: number=0;
    private nombreTipoDocumento: string="";
    private abreviaturaTipoDocumento: string="";
    private estadoTipoDocumento: boolean=true;

    constructor(idTipoDocumento: number, nombreTipoDocumento: string, abreviaturaTipoDocumento: string, estadoTipoDocumento: boolean){
        this.idTipoDocumento=idTipoDocumento;
        this.nombreTipoDocumento=nombreTipoDocumento;
        this.abreviaturaTipoDocumento=abreviaturaTipoDocumento;
        this.estadoTipoDocumento=estadoTipoDocumento;
    }


    /**
     * Getter idTipoDocumento
     * @return {number}
     */
	public getIdTipoDocumento(): number {
		return this.idTipoDocumento;
	}

    /**
     * Getter nombreTipoDocumento
     * @return {string}
     */
	public getNombreTipoDocumento(): string {
		return this.nombreTipoDocumento;
	}

    /**
     * Getter abreviaturaTipoDocumento
     * @return {string}
     */
	public getAbreviaturaTipoDocumento(): string {
		return this.abreviaturaTipoDocumento;
	}

    /**
     * Getter estadoTipoDocumento
     * @return {boolean}
     */
	public getEstadoTipoDocumento(): boolean {
		return this.estadoTipoDocumento;
	}

    /**
     * Setter idTipoDocumento
     * @param {number} value
     */
	public setIdTipoDocumento(value: number) {
		this.idTipoDocumento = value;
	}

    /**
     * Setter nombreTipoDocumento
     * @param {string} value
     */
	public setNombreTipoDocumento(value: string) {
		this.nombreTipoDocumento = value;
	}

    /**
     * Setter abreviaturaTipoDocumento
     * @param {string} value
     */
	public setAbreviaturaTipoDocumento(value: string) {
		this.abreviaturaTipoDocumento = value;
	}

    /**
     * Setter estadoTipoDocumento
     * @param {boolean} value
     */
	public setEstadoTipoDocumento(value: boolean) {
		this.estadoTipoDocumento = value;
	}

}
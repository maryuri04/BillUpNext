export class Municipio{
    private idMunicipio: number=0;
    private idDepartamento: number=0;
    private nombreMunicipio: string="";
    private codigoMunicipio: string="";

    constructor(idMunicipio: number, idDepartamento: number, nombreMunicipio: string, codigoMunicipio: string){
        this.idMunicipio=idMunicipio;
        this.idDepartamento=idDepartamento;
        this.nombreMunicipio=nombreMunicipio;
        this.codigoMunicipio=codigoMunicipio;
    }


    /**
     * Getter idMunicipio
     * @return {number}
     */
	public getIdMunicipio(): number {
		return this.idMunicipio;
	}

    /**
     * Getter idDepartamento
     * @return {number}
     */
	public getIdDepartamento(): number {
		return this.idDepartamento;
	}

    /**
     * Getter nombreMunicipio
     * @return {string}
     */
	public getNombreMunicipio(): string {
		return this.nombreMunicipio;
	}

    /**
     * Getter codigoMunicipio
     * @return {string}
     */
	public getCodigoMunicipio(): string {
		return this.codigoMunicipio;
	}

    /**
     * Setter idMunicipio
     * @param {number} value
     */
	public setIdMunicipio(value: number) {
		this.idMunicipio = value;
	}

    /**
     * Setter idDepartamento
     * @param {number} value
     */
	public setIdDepartamento(value: number) {
		this.idDepartamento = value;
	}

    /**
     * Setter nombreMunicipio
     * @param {string} value
     */
	public setNombreMunicipio(value: string) {
		this.nombreMunicipio = value;
	}

    /**
     * Setter codigoMunicipio
     * @param {string} value
     */
	public setCodigoMunicipio(value: string) {
		this.codigoMunicipio = value;
	}
    
}
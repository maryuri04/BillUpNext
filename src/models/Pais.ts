export class Pais{
    private idPais: number=0;
    private nombrePais: string="";
    private isoAlfa2Pais: string="";
    private isoNumericoPais: string="";
 
    constructor(idPais: number, nombrePais: string, isoAlfa2Pais: string, isoNumericoPais: string){
        this.idPais = idPais;
        this.nombrePais = nombrePais;
        this.isoAlfa2Pais = isoAlfa2Pais;
        this.isoNumericoPais = isoNumericoPais;
    }

    /**
     * Getter idPais
     * @return {number}
     */
	public getIdPais(): number {
		return this.idPais;
	}

    /**
     * Getter nombrePais
     * @return {string}
     */
	public getNombrePais(): string {
		return this.nombrePais;
	}

    /**
     * Getter isoAlfa2Pais
     * @return {string}
     */
	public getIsoAlfa2Pais(): string {
		return this.isoAlfa2Pais;
	}

    /**
     * Getter isoNumericoPais
     * @return {string}
     */
	public getIsoNumericoPais(): string {
		return this.isoNumericoPais;
	}

    /**
     * Setter idPais
     * @param {number} value
     */
	public setIdPais(value: number) {
		this.idPais = value;
	}

    /**
     * Setter nombrePais
     * @param {string} value
     */
	public setNombrePais(value: string) {
		this.nombrePais = value;
	}

    /**
     * Setter isoAlfa2Pais
     * @param {string} value
     */
	public setIsoAlfa2Pais(value: string) {
		this.isoAlfa2Pais = value;
	}

    /**
     * Setter isoNumericoPais
     * @param {string} value
     */
	public setIsoNumericoPais(value: string) {
		this.isoNumericoPais = value;
	}
    
}
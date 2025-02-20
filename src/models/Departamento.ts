export class Departamento{
    private idDepartamento: number=0;
    private idPais: number=0;
    private nombreDepartamento: string="";
    private codigoDepartamento: string="";

    constructor(idDepartamento: number, idPais: number, nombreDepartamento: string, codigoDepartamento: string){
        this.idDepartamento = idDepartamento;
        this.idPais = idPais;
        this.nombreDepartamento = nombreDepartamento;
        this.codigoDepartamento = codigoDepartamento;
    }


    /**
     * Getter idDepartamento
     * @return {number}
     */
	public getIdDepartamento(): number {
		return this.idDepartamento;
	}

    /**
     * Getter idPais
     * @return {number}
     */
	public getIdPais(): number {
		return this.idPais;
	}

    /**
     * Getter nombreDepartamento
     * @return {string}
     */
	public getNombreDepartamento(): string {
		return this.nombreDepartamento;
	}

    /**
     * Getter codigoDepartamento
     * @return {string}
     */
	public getCodigoDepartamento(): string {
		return this.codigoDepartamento;
	}

    /**
     * Setter idDepartamento
     * @param {number} value
     */
	public setIdDepartamento(value: number) {
		this.idDepartamento = value;
	}

    /**
     * Setter idPais
     * @param {number} value
     */
	public setIdPais(value: number) {
		this.idPais = value;
	}

    /**
     * Setter nombreDepartamento
     * @param {string} value
     */
	public setNombreDepartamento(value: string) {
		this.nombreDepartamento = value;
	}

    /**
     * Setter codigoDepartamento
     * @param {string} value
     */
	public setCodigoDepartamento(value: string) {
		this.codigoDepartamento = value;
	}

}
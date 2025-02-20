export class RegimenContribuyente{
    private idRegimenContribuyente: number=0;
    private nombreRegimenContribuyente: string="";
    private responsabilidadRegimenContribuyente: string="";

    constructor(idRegimenContribuyente: number, nombreRegimenContribuyente: string, responsabilidadRegimenContribuyente: string){
        this.idRegimenContribuyente=idRegimenContribuyente;
        this.nombreRegimenContribuyente=nombreRegimenContribuyente;
        this.responsabilidadRegimenContribuyente=responsabilidadRegimenContribuyente;
    }


    /**
     * Getter idRegimenContribuyente
     * @return {number}
     */
	public getIdRegimenContribuyente(): number {
		return this.idRegimenContribuyente;
	}

    /**
     * Getter nombreRegimenContribuyente
     * @return {string}
     */
	public getNombreRegimenContribuyente(): string {
		return this.nombreRegimenContribuyente;
	}

    /**
     * Getter responsabilidadRegimenContribuyente
     * @return {string}
     */
	public getResponsabilidadRegimenContribuyente(): string {
		return this.responsabilidadRegimenContribuyente;
	}

    /**
     * Setter idRegimenContribuyente
     * @param {number} value
     */
	public setIdRegimenContribuyente(value: number) {
		this.idRegimenContribuyente = value;
	}

    /**
     * Setter nombreRegimenContribuyente
     * @param {string} value
     */
	public setNombreRegimenContribuyente(value: string) {
		this.nombreRegimenContribuyente = value;
	}

    /**
     * Setter responsabilidadRegimenContribuyente
     * @param {string} value
     */
	public setResponsabilidadRegimenContribuyente(value: string) {
		this.responsabilidadRegimenContribuyente = value;
	}

}
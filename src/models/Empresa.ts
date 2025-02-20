export class Empresa{
    private idEmpresa: number = 0;
    private idTipoPersona: number = 0;
    private idRegimenContribuyente: number = 0;
    private idMunicipio: number = 0;
    private nitEmpresa: string = "";
    private digitoVerificacionEmpresa: string = "";
    private nombreEmpresa: string = "";
    private razonSocialEmpresa: string = "";
    private direccionEmpresa: string = "";
    private codigoPostalEmpresa: string = "";
    private telefonoEmpresa: string = "";
    private correoEmpresa: string = "";
    private logoEmpresa: string = "";
    private estadoEmpresa: boolean = true;

    constructor(idEmpresa: number, idTipoPersona: number, idRegimenContribuyente: number, idMunicipio: number, nitEmpresa: string, digitoVerificacionEmpresa: string, nombreEmpresa: string, razonSocialEmpresa: string, direccionEmpresa: string, codigoPostalEmpresa: string, telefonoEmpresa: string, correoEmpresa: string, estadoEmpresa: boolean, logoEmpresa?: string){
        this.idEmpresa = idEmpresa;
        this.idTipoPersona = idTipoPersona;
        this.idRegimenContribuyente = idRegimenContribuyente;
        this.idMunicipio = idMunicipio;
        this.nitEmpresa = nitEmpresa;
        this.digitoVerificacionEmpresa = digitoVerificacionEmpresa;
        this.nombreEmpresa = nombreEmpresa;
        this.razonSocialEmpresa = razonSocialEmpresa;
        this.direccionEmpresa = direccionEmpresa;
        this.codigoPostalEmpresa = codigoPostalEmpresa;
        this.telefonoEmpresa = telefonoEmpresa;
        this.correoEmpresa = correoEmpresa;
        if(logoEmpresa != null && logoEmpresa!=undefined){this.logoEmpresa = logoEmpresa;}
        this.estadoEmpresa = estadoEmpresa;
    }


    /**
     * Getter idEmpresa
     * @return {number }
     */
	public getIdEmpresa(): number  {
		return this.idEmpresa;
	}

    /**
     * Getter idTipoPersona
     * @return {number }
     */
	public getIdTipoPersona(): number  {
		return this.idTipoPersona;
	}

    /**
     * Getter idRegimenContribuyente
     * @return {number }
     */
	public getIdRegimenContribuyente(): number  {
		return this.idRegimenContribuyente;
	}

    /**
     * Getter idMunicipio
     * @return {number }
     */
	public getIdMunicipio(): number  {
		return this.idMunicipio;
	}

    /**
     * Getter nitEmpresa
     * @return {string }
     */
	public getNitEmpresa(): string  {
		return this.nitEmpresa;
	}

    /**
     * Getter digitoVerificacionEmpresa
     * @return {string }
     */
	public getDigitoVerificacionEmpresa(): string  {
		return this.digitoVerificacionEmpresa;
	}

    /**
     * Getter nombreEmpresa
     * @return {string }
     */
	public getNombreEmpresa(): string  {
		return this.nombreEmpresa;
	}

    /**
     * Getter razonSocialEmpresa
     * @return {string }
     */
	public getRazonSocialEmpresa(): string  {
		return this.razonSocialEmpresa;
	}

    /**
     * Getter direccionEmpresa
     * @return {string }
     */
	public getDireccionEmpresa(): string  {
		return this.direccionEmpresa;
	}

    /**
     * Getter codigoPostalEmpresa
     * @return {string }
     */
	public getCodigoPostalEmpresa(): string  {
		return this.codigoPostalEmpresa;
	}

    /**
     * Getter telefonoEmpresa
     * @return {string }
     */
	public getTelefonoEmpresa(): string  {
		return this.telefonoEmpresa;
	}

    /**
     * Getter correoEmpresa
     * @return {string }
     */
	public getCorreoEmpresa(): string  {
		return this.correoEmpresa;
	}

    /**
     * Getter logoEmpresa
     * @return {string }
     */
	public getLogoEmpresa(): string  {
		return this.logoEmpresa;
	}

    /**
     * Getter estadoEmpresa
     * @return {boolean }
     */
	public getEstadoEmpresa(): boolean  {
		return this.estadoEmpresa;
	}

    /**
     * Setter idEmpresa
     * @param {number } value
     */
	public setIdEmpresa(value: number ) {
		this.idEmpresa = value;
	}

    /**
     * Setter idTipoPersona
     * @param {number } value
     */
	public setIdTipoPersona(value: number ) {
		this.idTipoPersona = value;
	}

    /**
     * Setter idRegimenContribuyente
     * @param {number } value
     */
	public setIdRegimenContribuyente(value: number ) {
		this.idRegimenContribuyente = value;
	}

    /**
     * Setter idMunicipio
     * @param {number } value
     */
	public setIdMunicipio(value: number ) {
		this.idMunicipio = value;
	}

    /**
     * Setter nitEmpresa
     * @param {string } value
     */
	public setNitEmpresa(value: string ) {
		this.nitEmpresa = value;
	}

    /**
     * Setter digitoVerificacionEmpresa
     * @param {string } value
     */
	public setDigitoVerificacionEmpresa(value: string ) {
		this.digitoVerificacionEmpresa = value;
	}

    /**
     * Setter nombreEmpresa
     * @param {string } value
     */
	public setNombreEmpresa(value: string ) {
		this.nombreEmpresa = value;
	}

    /**
     * Setter razonSocialEmpresa
     * @param {string } value
     */
	public setRazonSocialEmpresa(value: string ) {
		this.razonSocialEmpresa = value;
	}

    /**
     * Setter direccionEmpresa
     * @param {string } value
     */
	public setDireccionEmpresa(value: string ) {
		this.direccionEmpresa = value;
	}

    /**
     * Setter codigoPostalEmpresa
     * @param {string } value
     */
	public setCodigoPostalEmpresa(value: string ) {
		this.codigoPostalEmpresa = value;
	}

    /**
     * Setter telefonoEmpresa
     * @param {string } value
     */
	public setTelefonoEmpresa(value: string ) {
		this.telefonoEmpresa = value;
	}

    /**
     * Setter correoEmpresa
     * @param {string } value
     */
	public setCorreoEmpresa(value: string ) {
		this.correoEmpresa = value;
	}

    /**
     * Setter logoEmpresa
     * @param {string } value
     */
	public setLogoEmpresa(value: string ) {
		this.logoEmpresa = value;
	}

    /**
     * Setter estadoEmpresa
     * @param {boolean } value
     */
	public setEstadoEmpresa(value: boolean ) {
		this.estadoEmpresa = value;
	}
    

}
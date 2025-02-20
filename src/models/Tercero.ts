export class Tercero{
    private idTercero: number = 0;
    private idEmpresa: number = 0;
    private idTipoPersona: number = 0;
    private idTipoDocumento: number = 0;
    private idMunicipio: number = 0;
    private digitoVerificacionTercero: string = "";
    private razonSocialTercero: string = "";
    private numeroDocumentoTercero: string = "";
    private nombreTercero: string = "";
    private apellidoTercero: string = "";
    private telefonoTercero: string = "";
    private direccionTercero: string = "";
    private correoTercero: string = "";
    private codigoPostalTercero: string = "";
    private proveedorTercero: boolean = false;
    private estadoTercero: boolean = true;

    constructor (idTercero: number, idEmpresa: number, idTipoPersona: number, idTipoDocumento: number, idMunicipio: number, digitoVerificacionTercero: string, razonSocialTercero: string, numeroDocumentoTercero: string, nombreTercero: string, apellidoTercero: string, telefonoTercero: string, direccionTercero: string, correoTercero: string, codigoPostalTercero: string, proveedorTercero: boolean, estadoTercero: boolean){
        this.idTercero = idTercero;
        this.idEmpresa = idEmpresa;
        this.idTipoPersona = idTipoPersona;
        this.idTipoDocumento = idTipoDocumento;
        this.idMunicipio = idMunicipio;
        this.digitoVerificacionTercero = digitoVerificacionTercero;
        this.razonSocialTercero = razonSocialTercero;
        this.numeroDocumentoTercero = numeroDocumentoTercero;
        this.nombreTercero = nombreTercero;
        this.apellidoTercero = apellidoTercero;
        this.telefonoTercero = telefonoTercero;
        this.direccionTercero = direccionTercero;
        this.correoTercero = correoTercero;
        this.codigoPostalTercero = codigoPostalTercero;
        this.proveedorTercero = proveedorTercero;
        this.estadoTercero = estadoTercero;
    }

    /**
     * Getter idTercero
     * @return {number }
     */
	public getIdTercero(): number  {
		return this.idTercero;
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
     * Getter idTipoDocumento
     * @return {number }
     */
	public getIdTipoDocumento(): number  {
		return this.idTipoDocumento;
	}

    /**
     * Getter idMunicipio
     * @return {number }
     */
	public getIdMunicipio(): number  {
		return this.idMunicipio;
	}

    /**
     * Getter digitoVerificacionTercero
     * @return {string }
     */
	public getDigitoVerificacionTercero(): string  {
		return this.digitoVerificacionTercero;
	}

    /**
     * Getter razonSocialTercero
     * @return {string }
     */
	public getRazonSocialTercero(): string  {
		return this.razonSocialTercero;
	}

    /**
     * Getter numeroDocumentoTercero
     * @return {string }
     */
	public getNumeroDocumentoTercero(): string  {
		return this.numeroDocumentoTercero;
	}

    /**
     * Getter nombreTercero
     * @return {string }
     */
	public getNombreTercero(): string  {
		return this.nombreTercero;
	}

    /**
     * Getter apellidoTercero
     * @return {string }
     */
	public getApellidoTercero(): string  {
		return this.apellidoTercero;
	}

    /**
     * Getter telefonoTercero
     * @return {string }
     */
	public getTelefonoTercero(): string  {
		return this.telefonoTercero;
	}

    /**
     * Getter direccionTercero
     * @return {string }
     */
	public getDireccionTercero(): string  {
		return this.direccionTercero;
	}

    /**
     * Getter correoTercero
     * @return {string }
     */
	public getCorreoTercero(): string  {
		return this.correoTercero;
	}

    /**
     * Getter codigoPostalTercero
     * @return {string }
     */
	public getCodigoPostalTercero(): string  {
		return this.codigoPostalTercero;
	}

    /**
     * Getter proveedorTercero
     * @return {boolean }
     */
	public getProveedorTercero(): boolean  {
		return this.proveedorTercero;
	}

    /**
     * Getter estadoTercero
     * @return {boolean }
     */
	public getEstadoTercero(): boolean  {
		return this.estadoTercero;
	}

    /**
     * Setter idTercero
     * @param {number } value
     */
	public setIdTercero(value: number ) {
		this.idTercero = value;
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
     * Setter idTipoDocumento
     * @param {number } value
     */
	public setIdTipoDocumento(value: number ) {
		this.idTipoDocumento = value;
	}

    /**
     * Setter idMunicipio
     * @param {number } value
     */
	public setIdMunicipio(value: number ) {
		this.idMunicipio = value;
	}

    /**
     * Setter digitoVerificacionTercero
     * @param {string } value
     */
	public setDigitoVerificacionTercero(value: string ) {
		this.digitoVerificacionTercero = value;
	}

    /**
     * Setter razonSocialTercero
     * @param {string } value
     */
	public setRazonSocialTercero(value: string ) {
		this.razonSocialTercero = value;
	}

    /**
     * Setter numeroDocumentoTercero
     * @param {string } value
     */
	public setNumeroDocumentoTercero(value: string ) {
		this.numeroDocumentoTercero = value;
	}

    /**
     * Setter nombreTercero
     * @param {string } value
     */
	public setNombreTercero(value: string ) {
		this.nombreTercero = value;
	}

    /**
     * Setter apellidoTercero
     * @param {string } value
     */
	public setApellidoTercero(value: string ) {
		this.apellidoTercero = value;
	}

    /**
     * Setter telefonoTercero
     * @param {string } value
     */
	public setTelefonoTercero(value: string ) {
		this.telefonoTercero = value;
	}

    /**
     * Setter direccionTercero
     * @param {string } value
     */
	public setDireccionTercero(value: string ) {
		this.direccionTercero = value;
	}

    /**
     * Setter correoTercero
     * @param {string } value
     */
	public setCorreoTercero(value: string ) {
		this.correoTercero = value;
	}

    /**
     * Setter codigoPostalTercero
     * @param {string } value
     */
	public setCodigoPostalTercero(value: string ) {
		this.codigoPostalTercero = value;
	}

    /**
     * Setter proveedorTercero
     * @param {boolean } value
     */
	public setProveedorTercero(value: boolean ) {
		this.proveedorTercero = value;
	}

    /**
     * Setter estadoTercero
     * @param {boolean } value
     */
	public setEstadoTercero(value: boolean ) {
		this.estadoTercero = value;
	}
    
}
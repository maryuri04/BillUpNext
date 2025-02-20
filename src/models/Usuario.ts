export class Usuario{
    private idUsuario: number = 0;
    private idEmpresa: number = 0;
    private idTipoDocumento: number = 0
    private idMunicipio: number = 0;
    private idRol: number = 0;
    private numeroDocumentoUsuario: string = "";
    private nombreUsuario: string = "";
    private apellidoUsuario: string = "";
    private correoUsuario: string = "";
    private telefonoUsuario: string = "";
    private direccionUsuario: string = "";
    private claveUsuario: string = "";
    private estadoUsuario: boolean = true;


    constructor( idEmpresa: number, idTipoDocumento: number, idMunicipio: number, idRol: number, numeroDocumento: string, nombreUsuario: string, apellidoUsuario: string, correoUsuario: string, telefonoUsuario: string, direccionUsuario: string, claveUsuario: string, estadoUsuario: boolean, idUsuario?: number){
        if(idUsuario!=null && idUsuario!=undefined){
            this.idUsuario = idUsuario;
        }
        this.idEmpresa = idEmpresa;
        this.idTipoDocumento = idTipoDocumento;
        this.idMunicipio = idMunicipio;
        this.idRol = idRol;
        this.numeroDocumentoUsuario = numeroDocumento;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.correoUsuario = correoUsuario;
        this.telefonoUsuario = telefonoUsuario;
        this.direccionUsuario = direccionUsuario;
        this.claveUsuario = claveUsuario;
        this.estadoUsuario = estadoUsuario;
    }


    /**
     * Getter idUsuario
     * @return {number }
     */
	public getIdUsuario(): number  {
		return this.idUsuario;
	}

    /**
     * Getter idEmpresa
     * @return {number }
     */
	public getIdEmpresa(): number  {
		return this.idEmpresa;
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
     * Getter idRol
     * @return {number }
     */
	public getIdRol(): number  {
		return this.idRol;
	}

    /**
     * Getter numeroDocumento
     * @return {string }
     */
	public getNumeroDocumento(): string  {
		return this.numeroDocumentoUsuario;
	}

    /**
     * Getter nombreUsuario
     * @return {string }
     */
	public getNombreUsuario(): string  {
		return this.nombreUsuario;
	}

    /**
     * Getter apellidoUsuario
     * @return {string }
     */
	public getApellidoUsuario(): string  {
		return this.apellidoUsuario;
	}

    /**
     * Getter correoUsuario
     * @return {string }
     */
	public getCorreoUsuario(): string  {
		return this.correoUsuario;
	}

    /**
     * Getter telefonoUsuario
     * @return {string }
     */
	public getTelefonoUsuario(): string  {
		return this.telefonoUsuario;
	}

    /**
     * Getter direccionUsuario
     * @return {string }
     */
	public getDireccionUsuario(): string  {
		return this.direccionUsuario;
	}

    /**
     * Getter claveUsuario
     * @return {string }
     */
	public getClaveUsuario(): string  {
		return this.claveUsuario;
	}

    /**
     * Getter estadoUsuario
     * @return {boolean }
     */
	public getEstadoUsuario(): boolean  {
		return this.estadoUsuario;
	}

    /**
     * Setter idUsuario
     * @param {number } value
     */
	public setIdUsuario(value: number ) {
		this.idUsuario = value;
	}

    /**
     * Setter idEmpresa
     * @param {number } value
     */
	public setIdEmpresa(value: number ) {
		this.idEmpresa = value;
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
     * Setter idRol
     * @param {number } value
     */
	public setIdRol(value: number ) {
		this.idRol = value;
	}

    /**
     * Setter numeroDocumento
     * @param {string } value
     */
	public setNumeroDocumento(value: string ) {
		this.numeroDocumentoUsuario = value;
	}

    /**
     * Setter nombreUsuario
     * @param {string } value
     */
	public setNombreUsuario(value: string ) {
		this.nombreUsuario = value;
	}

    /**
     * Setter apellidoUsuario
     * @param {string } value
     */
	public setApellidoUsuario(value: string ) {
		this.apellidoUsuario = value;
	}

    /**
     * Setter correoUsuario
     * @param {string } value
     */
	public setCorreoUsuario(value: string ) {
		this.correoUsuario = value;
	}

    /**
     * Setter telefonoUsuario
     * @param {string } value
     */
	public setTelefonoUsuario(value: string ) {
		this.telefonoUsuario = value;
	}

    /**
     * Setter direccionUsuario
     * @param {string } value
     */
	public setDireccionUsuario(value: string ) {
		this.direccionUsuario = value;
	}

    /**
     * Setter claveUsuario
     * @param {string } value
     */
	public setClaveUsuario(value: string ) {
		this.claveUsuario = value;
	}

    /**
     * Setter estadoUsuario
     * @param {boolean } value
     */
	public setEstadoUsuario(value: boolean ) {
		this.estadoUsuario = value;
	}


}
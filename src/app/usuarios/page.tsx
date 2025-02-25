"use client";

import { UsuarioResponseDTO } from "@/dto/UsuarioResponseDTO";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pencil, Trash2, Eye, X, PlusCircle, XCircle } from "lucide-react";
import ReactModal from "react-modal";
import MostrarInfoUsuario from "@/components/usuarios/MostrarInfoUsuario";
import RegistrarUsuario from "@/components/usuarios/RegistrarUsuario";
import { useUsuarioContext } from '@/context/UsuarioContext';
import { RolDTO } from '@/dto/RolDTO';
import { DepartamentoDTO } from '@/dto/DepartamentoDTO';
import { MunicipioDTO } from '@/dto/MunicipioDTO';
import { EmpresaDTO } from '@/dto/EmpresaRequestDTO';
import { TipoDocumentoDTO } from '@/dto/TipoDocumentoDTO';
import { UsuarioRequestDTO } from '@/dto/UsuarioRequestDTO';
import { useRef } from "react";


const UsuariosPage: React.FC = () => {
    const [modalInfo, setModalInfo] = useState(false)
    const [modalRegistrar, setModalRegistrar] = useState(false)
    const [modalActualizar, setModalActualizar] = useState(false)
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<UsuarioResponseDTO | null>(null)
    const {
        departamentos,
        setDepartamentos,
        municipios,
        setMunicipios,
        empresas,
        setEmpresas,
        roles,
        setRoles,
        tiposDocumento,
        setTiposDocumento,
        usuarios,
        setUsuarios,
    } = useUsuarioContext()


    const [usuariosFiltrados, setUsuariosFiltrados] = useState<UsuarioResponseDTO[]>([]);
    const [municipiosFiltrados, setMunicipiosFiltrados] = useState<MunicipioDTO[]>([]);
    const [departamentosFiltrados, setDepartamentosFiltrados] = useState<DepartamentoDTO[]>([]);

    const nombreUsuarioRef = useRef<HTMLInputElement>(null)
    const idTipoDocumentoRef = useRef<HTMLSelectElement>(null)
    const idDepartamentoRef = useRef<HTMLSelectElement>(null)
    const idMunicipioRef = useRef<HTMLSelectElement>(null)
    const idEmpresaRef = useRef<HTMLSelectElement>(null)
    const idRolRef = useRef<HTMLSelectElement>(null)
    const estadoUsuarioRef = useRef<HTMLSelectElement>(null)


    const obtenerUsuarios = async () => {
        try {
            const respuesta= await axios.get<UsuarioResponseDTO[]>("/api/usuarios")
            if (respuesta.status === 200) {
                setUsuarios(respuesta.data)
                setUsuariosFiltrados(respuesta.data)
            } else {
                console.error(respuesta.data)
            }
        } catch (error) {
            console.error("Error al obtener los usuarios:", error)
        }
    }

    const handleEliminarUsuario = async (idUsuario: number) => {
        try {
            const respuesta = await axios.delete(`/api/usuarios/${idUsuario}`);
            if (respuesta.status === 200) {
                obtenerUsuarios()
            } else {
                console.error(respuesta.data)
            }
            
        } catch (error) {
            console.error("Error al eliminar el usuario:", error)
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [departamentosRes, empresasRes, rolesRes, tiposDocumentoRes, municipiosRes, usuariosRes] = await Promise.all([
                    axios.get("/api/departamentos"),
                    axios.get("/api/empresas"),
                    axios.get("/api/roles"),
                    axios.get("/api/tipos-documento"),
                    axios.get("/api/municipios"),
                    axios.get("/api/usuarios"),
                ])

                if (departamentosRes.status !== 200) {
                    console.error(departamentosRes.data)
                }

                if (empresasRes.status !== 200) {
                    console.error(empresasRes.data)
                }

                if (rolesRes.status !== 200) {
                    console.error(rolesRes.data)
                }

                if (tiposDocumentoRes.status !== 200) {
                    console.error(tiposDocumentoRes.data)
                }

                if (municipiosRes.status !== 200) {
                    console.error(municipiosRes.data)
                }

                if (usuariosRes.status !== 200) {
                    console.error(usuariosRes.data)
                }

                setDepartamentos(departamentosRes.data || [])
                setEmpresas(empresasRes.data.filter((empresa: EmpresaDTO) => empresa.estadoEmpresa === true) || [])
                setRoles(rolesRes.data.filter((rol: RolDTO) => rol.estadoRol === true) || [])
                setTiposDocumento(
                    tiposDocumentoRes.data.filter(
                        (tipoDocumento: TipoDocumentoDTO) => tipoDocumento.estadoTipoDocumento === true,
                    ) || [],
                )
                setMunicipios(municipiosRes.data || [])
                setUsuarios(usuariosRes.data || [])
                setUsuariosFiltrados(usuariosRes.data || [])
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [setDepartamentos, setEmpresas, setRoles, setTiposDocumento, setMunicipios, setUsuarios])

    const filtrarUsuarios = () => {
        const idTipoDocumento = idTipoDocumentoRef.current?.value;
        const nombreUsuario = nombreUsuarioRef.current?.value;
        const idEmpresa = idEmpresaRef.current?.value;
        const idRol = idRolRef.current?.value;
        const estadoUsuario = estadoUsuarioRef.current?.value;
        const idDepartamento = idDepartamentoRef.current?.value;
        const idMunicipio = idMunicipioRef.current?.value;

        let usuariosFiltrados = [...usuarios];

        if (idRol && idRol !== "0") {
            usuariosFiltrados = usuariosFiltrados.filter((usuario) => usuario.idRol === Number(idRol));
        }

        if (estadoUsuario !== undefined && estadoUsuario !== "") {
            usuariosFiltrados = usuariosFiltrados.filter((usuario) => usuario.estadoUsuario === (estadoUsuario === "true"));
        }

        if (idEmpresa && idEmpresa !== "0") {
            usuariosFiltrados = usuariosFiltrados.filter((usuario) => usuario.idEmpresa === Number(idEmpresa));
        }

        if (idTipoDocumento && idTipoDocumento !== "0") {
            usuariosFiltrados = usuariosFiltrados.filter((usuario) => usuario.idTipoDocumento === Number(idTipoDocumento));
        }

        if (idDepartamento && idDepartamento !== "0") {
            usuariosFiltrados = usuariosFiltrados.filter((usuario) => usuario.idDepartamento === Number(idDepartamento));
        }

        if (idMunicipio && idMunicipio !== "0") {
            usuariosFiltrados = usuariosFiltrados.filter((usuario) => usuario.idMunicipio === Number(idMunicipio));
        }

        if (nombreUsuario) {
            usuariosFiltrados = usuariosFiltrados.filter((usuario) => {
                const nombreCompleto = `${usuario.nombreUsuario} ${usuario.apellidoUsuario}`;
                return nombreCompleto.toLowerCase().includes(nombreUsuario.toLowerCase());
            });
        }

        setUsuariosFiltrados(usuariosFiltrados);
        console.log(usuariosFiltrados);
    };

    useEffect(() => {
        filtrarUsuarios();
    }, [usuarios]);

    useEffect(() => {
        if (!departamentos.length || !municipios.length) return;

        setDepartamentosFiltrados(departamentos);

        const idDepartamento = idDepartamentoRef.current?.value;

        if (idDepartamento && idDepartamento !== "0") {
            setMunicipiosFiltrados(municipios.filter((municipio) => municipio.idDepartamento === Number(idDepartamento)));
        } else {
            setMunicipiosFiltrados(municipios); // Si no hay departamento seleccionado, mostrar todos los municipios
        }
    }, [departamentos, municipios, idDepartamentoRef.current?.value]); 


    useEffect(() => {
        if (!municipios.length) return;

        const idMunicipio = idMunicipioRef.current?.value;
        if (idMunicipio && idMunicipio !== "0") {
            const departamentoEncontrado = municipios.find((municipio) => municipio.idMunicipio === Number(idMunicipio))?.idDepartamento;
            if (departamentoEncontrado && idDepartamentoRef.current) {
                idDepartamentoRef.current.value = departamentoEncontrado.toString();
                setMunicipiosFiltrados(municipios.filter((municipio) => municipio.idDepartamento === departamentoEncontrado));
            }
        }
    }, [municipios, idMunicipioRef.current?.value]);

    const limpiarFiltros = () => {
        if (idTipoDocumentoRef.current) idTipoDocumentoRef.current.value = "0";
        if (nombreUsuarioRef.current) nombreUsuarioRef.current.value = "";
        if (idEmpresaRef.current) idEmpresaRef.current.value = "0";
        if (idRolRef.current) idRolRef.current.value = "0";
        if (idDepartamentoRef.current) idDepartamentoRef.current.value = "0";
        if (idMunicipioRef.current) idMunicipioRef.current.value = "0";
        filtrarUsuarios();
    }


    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-5">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Usuarios</h1>

                <div className="flex justify-end mb-4 gap-4">
                    {/* Botón para agregar usuario */}
                    <button
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                        onClick={() => setModalRegistrar(true)}
                    >
                        <PlusCircle size={20} />
                        Agregar usuario
                    </button>

                    {/* Botón para limpiar filtros */}
                    <button
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                        onClick={limpiarFiltros}
                    >
                        <XCircle size={20} />
                        Limpiar filtros
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="nombreUsuario" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Nombre
                        </label>
                        <input
                            id="nombreUsuario"
                            type="text"
                            ref={nombreUsuarioRef}
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600 transition-all duration-200"
                            onChange={filtrarUsuarios}
                        />
                    </div>

                    {/* Tipo de Documento */}
                    <div>
                        <label htmlFor="idTipoDocumento" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Tipo de documento
                        </label>
                        <select
                            id="idTipoDocumento"
                            ref={idTipoDocumentoRef}
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600 transition-all duration-200"
                            onChange={filtrarUsuarios}
                        >
                            <option value="0">Todos</option>
                            {tiposDocumento.map((tipo) => (
                                <option key={tipo.idTipoDocumento} value={tipo.idTipoDocumento.toString()}>
                                    {tipo.nombreTipoDocumento}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Empresa */}
                    <div>
                        <label htmlFor="idEmpresa" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Empresa
                        </label>
                        <select
                            id="idEmpresa"
                            ref={idEmpresaRef}
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600 transition-all duration-200"
                            onChange={filtrarUsuarios}
                        >
                            <option value="0">Todas</option>
                            {empresas.map((emp) => (
                                <option key={emp.idEmpresa} value={emp.idEmpresa.toString()}>
                                    {emp.nombreEmpresa}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Rol */}
                    <div>
                        <label htmlFor="idRol" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Rol
                        </label>
                        <select
                            id="idRol"
                            ref={idRolRef}
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600 transition-all duration-200"
                            onChange={filtrarUsuarios}
                        >
                            <option value="0">Todos</option>
                            {roles.map((rol) => (
                                <option key={rol.idRol} value={rol.idRol.toString()}>
                                    {rol.nombreRol}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Departamento */}
                    <div>
                        <label htmlFor="idDepartamento" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Departamento
                        </label>
                        <select
                            id="idDepartamento"
                            ref={idDepartamentoRef}
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600 transition-all duration-200"
                            onChange={filtrarUsuarios}
                        >
                            <option value="0">Todos</option>
                            {departamentosFiltrados.map((departamento) => (
                                <option key={departamento.idDepartamento} value={departamento.idDepartamento.toString()}>
                                    {departamento.nombreDepartamento}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Municipio */}
                    <div>
                        <label htmlFor="idMunicipio" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Municipio
                        </label>
                        <select
                            id="idMunicipio"
                            ref={idMunicipioRef}
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600 transition-all duration-200"
                            onChange={filtrarUsuarios}
                        >
                            <option value="0">Todos</option>
                            {municipiosFiltrados.map((municipio) => (
                                <option key={municipio.idMunicipio} value={municipio.idMunicipio.toString()}>
                                    {municipio.nombreMunicipio}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Estado */}
                    <div>
                        <label htmlFor="estadoUsuario" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Estado
                        </label>
                        <select
                            id="estadoUsuario"
                            ref={estadoUsuarioRef}
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600 transition-all duration-200"
                            onChange={filtrarUsuarios}
                        >
                            <option value="">Todos</option>
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Grid de usuarios */}
            <div className="grid gap-4 md:grid-cols-2">
                {usuariosFiltrados.map((usuario) => (
                    <div
                        key={usuario.idUsuario}
                        className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 bg-white dark:bg-gray-900"
                    >
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {usuario.nombreUsuario} {usuario.apellidoUsuario}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Empresa:</span> {empresas.find(e => e.idEmpresa === usuario.idEmpresa)?.nombreEmpresa}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Rol:</span> {roles.find(r => r.idRol === usuario.idRol)?.nombreRol}
                        </p>
                        <div className="flex gap-6 mt-4 justify-center">
                            <button
                                className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            >
                                <Pencil className="w-5 h-5 text-gray-600 dark:text-gray-300"
                                    onClick={() => {
                                        setUsuarioSeleccionado(usuario);
                                        setModalActualizar(true);
                                    }}
                                />
                            </button>
                            <button
                                className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
                                onClick={() => handleEliminarUsuario(usuario.idUsuario)}
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                            <button
                                className="flex items-center gap-2 p-2 rounded-lg border border-gray-300 dark:border-gray-600 
               bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
               hover:bg-gray-200 dark:hover:bg-gray-700 transition-all 
               focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
                                onClick={() => {
                                    setUsuarioSeleccionado(usuario);
                                    setModalInfo(true);
                                }}
                            >
                                <Eye className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform transform hover:scale-110" />
                            </button>

                        </div>
                    </div>
                ))}
            </div>

            {/* Modal para mostrar la información de un usuario*/}
            <ReactModal
                isOpen={modalInfo}
                onRequestClose={() => setModalInfo(false)}
                ariaHideApp={false}
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md relative animate-fadeIn">
                    {/* Botón para cerrar con icono X */}
                    <button
                        onClick={() => setModalInfo(false)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                        <X className="w-5 h-5 text-gray-800 dark:text-gray-300" />
                    </button>

                    {usuarioSeleccionado && <MostrarInfoUsuario usuario={usuarioSeleccionado} />}
                </div>
            </ReactModal>

            {/* Modal para registrar un usuario*/}
            <ReactModal
                isOpen={modalRegistrar}
                onRequestClose={() => setModalRegistrar(false)}
                ariaHideApp={false}
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
            >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-full max-w-md sm:max-w-lg md:max-w-2xl relative animate-fadeIn 
                    max-h-[90vh] overflow-y-auto modal-content">
                    {/* Botón para cerrar con icono X */}
                    <button
                        onClick={() => setModalRegistrar(false)}
                        className="absolute top-3 right-3 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                        <X className="w-6 h-6 text-gray-800 dark:text-gray-300" />
                    </button>

                    <RegistrarUsuario obtenerUsuarios={obtenerUsuarios} setModalRegistrar={setModalRegistrar} />
                </div>
            </ReactModal>

            {/* Modal para actualizar un usuario*/}
            <ReactModal
                isOpen={modalActualizar}
                onRequestClose={() => setModalActualizar(false)}
                ariaHideApp={false}
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
            >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-full max-w-md sm:max-w-lg md:max-w-2xl relative animate-fadeIn 
                    max-h-[90vh] overflow-y-auto modal-content">
                    {/* Botón para cerrar con icono X */}
                    <button
                        onClick={() => setModalActualizar(false)}
                        className="absolute top-3 right-3 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                        <X className="w-6 h-6 text-gray-800 dark:text-gray-300" />
                    </button>

                    <RegistrarUsuario idUsuario={usuarioSeleccionado?.idUsuario} obtenerUsuarios={obtenerUsuarios} setModalActualizar={setModalActualizar} />
                </div>
            </ReactModal>

        </div>
    );
};

export default UsuariosPage;

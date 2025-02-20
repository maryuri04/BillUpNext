import { TipoDocumentoService } from '@/services/TipoDocumentoService';
import { TipoDocumentoDAOImpl } from '@/dao/impl/TipoDocumentoDAOImpl';
import { TipoDocumento } from '@/models/TipoDocumento';
import { NextResponse } from 'next/server';
import { TipoDocumentoDTO } from '@/dto/TipoDocumentoDTO';
import { plainToInstance } from 'class-transformer';

export class TipoDocumentoServiceImpl implements TipoDocumentoService {
    private static instance: TipoDocumentoServiceImpl;
    private tipoDocumentoDAOImpl: TipoDocumentoDAOImpl;

    private constructor() {
        this.tipoDocumentoDAOImpl = TipoDocumentoDAOImpl.getInstance();
    }

    public static getInstance(): TipoDocumentoServiceImpl {
        if (!TipoDocumentoServiceImpl.instance) {
            TipoDocumentoServiceImpl.instance = new TipoDocumentoServiceImpl();
        }

        return TipoDocumentoServiceImpl.instance;
    }
   
    public getAll = async(): Promise<Array<TipoDocumento>> => {
        const tiposDocumentoDatabase : TipoDocumentoDTO[] = await this.tipoDocumentoDAOImpl.getAll();
        const tiposDocumento: Array<TipoDocumento> = tiposDocumentoDatabase.map((tipoDocumentoDTO) => {
            return (plainToInstance(TipoDocumento, tipoDocumentoDTO));
        });

        return tiposDocumento;
    }

    public async create(data: any): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }

    public async update(data: any): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }

    public async delete(idTipoDocumento: number): Promise<NextResponse> {
        throw new Error("Method not implemented.");
    }
}
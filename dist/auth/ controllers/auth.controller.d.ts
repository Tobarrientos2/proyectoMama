import { Response } from 'express';
export declare class AuthController {
    constructor();
    obtenerDatosRegistro(res: Response): any;
    registrarUsuario(body: any, res: Response): Promise<any>;
}

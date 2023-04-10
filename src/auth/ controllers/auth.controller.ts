import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get('datos_registro')
  obtenerDatosRegistro(@Res() res: Response): any {
    // Definir lógica para obtener los datos de registro
  }

  @Post('registro')
  async registrarUsuario(@Body() body: any, @Res() res: Response): Promise<any> {
    // Definir lógica para registrar el usuario
  }
}

/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';
import { connectModbusTcp } from './connectModbusTcp';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getConnect(
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const client = connectModbusTcp('127.0.0.1', 502);
    req.app.set('modbusClient', client);
    res.json({ msg: client });
  }
}

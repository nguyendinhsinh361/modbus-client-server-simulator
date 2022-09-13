/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as modbus from 'jsmodbus';
import * as net from 'net';
import { getDataFromClient } from './getDataFromClient';
async function bootstrap() {
  const netServer = new net.Server();
  const server = new modbus.server.TCP(netServer);

  getDataFromClient(netServer, server);
  // server.on('postWriteMultipleRegisters', function (value) {
  //   console.log('Write Multiple Registers:', value);
  // });

  // let i = 0;
  // setInterval(() => {
  //   i++;
  //   server.holding.writeInt16BE(i,8) // 40001 + 8/2 = 40005 // Đoạn này không hiểu lắm
  //   server.holding.writeInt16BE(i%3,10) // 40006 // Đoạn này cũng thế
  //   if(i>=200) i=0;
  // }, 1000)
  netServer.listen(502, async () => {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  });
}
bootstrap();

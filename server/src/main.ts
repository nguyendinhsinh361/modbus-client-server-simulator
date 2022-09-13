/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as modbus from 'jsmodbus';
import * as net from 'net';
async function bootstrap() {
  const netServer = new net.Server();
  const server = new modbus.server.TCP(netServer);

  server.on('postWriteMultipleRegisters', function (value) {
    console.log('Write Multiple Registers:', value);
  });

  let i = 0;
  setInterval(() => {
    i++;
    server.holding.writeInt16BE(i,8)
    server.holding.writeInt16BE(i%3,10)
    if(i>=200) i=0;
  }, 1000)
  netServer.listen(502, async () => {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  });
}
bootstrap();

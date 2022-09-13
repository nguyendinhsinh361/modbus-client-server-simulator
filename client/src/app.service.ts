import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getConnect(): string {
    return 'Hello World. I am from Client !!!';
  }
}

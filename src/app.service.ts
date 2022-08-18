import { Injectable } from '@nestjs/common';

export type Greeting = {
  message: string;
};

@Injectable()
export class AppService {
  getHello(): Greeting {
    return {
      message: 'Hello World!',
    };
  }
}

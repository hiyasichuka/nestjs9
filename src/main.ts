import { Response } from 'express';
import { NestFactory, BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { AppModule } from './app.module';

// Exception Filter for TypeORM Query Error.
// This is just an example.
@Catch(QueryFailedError)
export class QueryExceptionsFilter extends BaseExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    host
      .switchToHttp()
      .getResponse<Response>()
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: exception,
      });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new QueryExceptionsFilter());
  await app.listen(3000);
}

bootstrap();

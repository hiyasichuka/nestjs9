import {
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post('code')
  @HttpCode(204)
  createPost() {
    return 'This action adds a new cat';
  }

  @Post()
  @Header('Cache-Control', 'none')
  create() {
    return 'This action adds a new cat';
  }
}

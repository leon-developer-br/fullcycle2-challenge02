import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { MaratonaService } from './maratona.service';
import { Maratona } from './maratona.entity';

@Controller('maratona')
export class MaratonaController {
  constructor(private readonly maratonaService: MaratonaService) {}

  @Get()
  list(): Promise<Maratona[]> {
    return this.maratonaService.list();
  }

  @Post()
  async store(@Req() request: Request): Promise<any> {
    return await this.maratonaService.save(request);
  }
}

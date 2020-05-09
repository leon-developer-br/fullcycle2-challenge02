import { Injectable } from '@nestjs/common';
import { Maratona } from './maratona.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MaratonaService {
  constructor(
    @InjectRepository(Maratona)
    private readonly maratonaRepository: Repository<Maratona>,
  ) {}

  list(): Promise<Maratona[]> {
    return this.maratonaRepository.find();
  }

  save(request: Request): Promise<Maratona> {
    return this.maratonaRepository.save(request.body as any);
  }
}

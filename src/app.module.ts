import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaratonaModule } from './maratona/maratona.module';
import { Maratona } from './maratona/maratona.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'env',
    }),
    TypeOrmModule.forRoot({}),
    MaratonaModule,
  ],
})
export class AppModule {}

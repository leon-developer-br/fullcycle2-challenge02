import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaratonaModule } from './maratona/maratona.module';
import { Maratona } from './maratona/maratona.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_TYPE,
      database: process.env.TYPEORM_DATABASE,
      entities: [process.env.TYPEORM_ENTITIES],
      migrations: [process.env.TYPEORM_MIGRATIONS],
      synchronize: true,
    }),
    MaratonaModule,
  ],
})
export class AppModule {}

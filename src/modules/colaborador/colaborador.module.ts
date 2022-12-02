import { Module } from '@nestjs/common';
import { ColaboradorService } from './colaborador.service';
import { ColaboradorController } from './colaborador.controller';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [ColaboradorController],
  providers: [ColaboradorService, PrismaService]
})
export class ColaboradorModule {}

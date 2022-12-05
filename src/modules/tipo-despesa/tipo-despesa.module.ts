import { Module } from '@nestjs/common';
import { TipoDespesaService } from './tipo-despesa.service';
import { TipoDespesaController } from './tipo-despesa.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [TipoDespesaController],
  providers: [TipoDespesaService, PrismaService]
})
export class TipoDespesaModule {}

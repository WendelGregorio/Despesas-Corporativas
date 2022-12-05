import { Module } from '@nestjs/common';
import { DespesaService } from './despesa.service';
import { DespesaController } from './despesa.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [DespesaController],
  providers: [DespesaService, PrismaService]
})
export class DespesaModule {}

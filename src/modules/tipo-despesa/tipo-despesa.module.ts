import { Module } from '@nestjs/common';
import { TipoDespesaService } from './tipo-despesa.service';
import { TipoDespesaController } from './tipo-despesa.controller';

@Module({
  controllers: [TipoDespesaController],
  providers: [TipoDespesaService]
})
export class TipoDespesaModule {}

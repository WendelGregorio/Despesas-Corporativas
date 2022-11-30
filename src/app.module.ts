import { Module } from '@nestjs/common';
import { ColaboradorModule } from './modules/colaborador/colaborador.module';
import { DespesaModule } from './modules/despesa/despesa.module';
import { TipoDespesaModule } from './modules/tipo-despesa/tipo-despesa.module';

@Module({
  imports: [ColaboradorModule, DespesaModule, TipoDespesaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

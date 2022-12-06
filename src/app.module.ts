import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ColaboradorModule } from './modules/colaborador/colaborador.module';
import { DespesaModule } from './modules/despesa/despesa.module';
import { TipoDespesaModule } from './modules/tipo-despesa/tipo-despesa.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ColaboradorModule, DespesaModule, TipoDespesaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

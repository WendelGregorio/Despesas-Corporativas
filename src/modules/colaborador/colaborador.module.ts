import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { localStrategy } from 'src/strategies/local.strategy';
import { ColaboradorService } from './colaborador.service';
import { ColaboradorController } from './colaborador.controller';
import { PrismaService } from '../../database/PrismaService';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { AuthService } from '../auth/auth.service';

@Module({
  imports:[
    ConfigModule.forRoot(),
    PassportModule, 
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: '10m'
      },
    })
  ],
  controllers: [ColaboradorController],
  providers: [ColaboradorService, PrismaService, AuthService,  localStrategy, JwtStrategy],
  exports: [ColaboradorService]
})
export class ColaboradorModule {}

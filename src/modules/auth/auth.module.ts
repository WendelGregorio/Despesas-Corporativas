import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { localStrategy } from 'src/strategies/local.strategy';
import { ColaboradorModule } from '../colaborador/colaborador.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/database/PrismaService';
import { CreateColaboradorDto } from '../colaborador/dto/create-colaborador.dto';
import { JwtStrategy } from 'src/strategies/jwt.strategy';

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
  controllers: [AuthController],
  providers: [AuthService, PrismaService, localStrategy, CreateColaboradorDto, JwtStrategy],
})
export class AuthModule {}

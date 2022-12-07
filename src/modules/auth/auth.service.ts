import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userInfo } from 'os';
import { PrismaService } from 'src/database/PrismaService';
import { CreateColaboradorDto } from '../colaborador/dto/create-colaborador.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private readonly jwtService: JwtService) {}

    async login(colaborador){
        const payload = { 
            id: colaborador.idColaborador, 
            registro: colaborador.registro
        }
        
        return {
            token: this.jwtService.sign(payload)
        }
    }

    async validadeColaborador(registro: string, senha: string){
        let colaborador: CreateColaboradorDto

        try {
            colaborador = await this.prisma.colaborador.findUnique({ where: { registro } })    
        } catch (error) {
            return null
        }

        if(!colaborador) return null

        const isPasswordValid = (colaborador.senha == senha)

        if(!isPasswordValid) return null

        return colaborador
        
    }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ColaboradorDTO } from './colaborador.dto';

@Injectable()
export class ColaboradorService {

    constructor(private prisma: PrismaService) {

    }

    async exists(data: ColaboradorDTO){
        const colaboradorExists = await this.prisma.colaborador.findFirst({
            where: data
        })
        
        if(colaboradorExists){
            return true;
        }else{
            return false;
        }
    }

    async create(data: ColaboradorDTO){
        
        if(!(await this.exists(data))){
            const colaborador = await this.prisma.colaborador.create({
                data,
            });
    
            return colaborador;
        }else{
            throw new Error("Colaborador já existe!")    
        }
       
    }

    async findAll() {
        return await this.prisma.colaborador.findMany()
    }

    async update(id: string, data: ColaboradorDTO) {
        const colaboradorExists = await this.prisma.colaborador.findUnique({
            where: {
                idColaborador: id
            }
        })

        if(!colaboradorExists) {
            throw new Error("Colaborador não existe")
        }

        return await this.prisma.colaborador.update({
            data,
            where: {
                idColaborador: id
            }
        })

    }

    async delete(id: string) {
        const colaboradorExists = await this.prisma.colaborador.findUnique({
            where: {
                idColaborador: id
            }
        })

        if(!colaboradorExists) {
            throw new Error("Colaborador não existe")
        }

        return await this.prisma.colaborador.delete({
            where: {
                idColaborador: id
            }
        })
    }
}

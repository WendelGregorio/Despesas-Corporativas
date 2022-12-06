import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';


@Injectable()
export class ColaboradorService {

    constructor(private prisma: PrismaService) {}

    async exists(data: CreateColaboradorDto){
        const colaboradorExists = await this.prisma.colaborador.findFirst({
            where: data
        })
        
        if(colaboradorExists){
            return true;
        }else{
            return false;
        }
    }

    async create(data: CreateColaboradorDto){
        
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

    async findOne(id: number) {
        console.log(typeof id)
        return await this.prisma.colaborador.findUnique({
            where: {
                idColaborador: id
            }
        })
    }

    async update(id: number, data: UpdateColaboradorDto) {
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

    async delete(id: number) {
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

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateTipoDespesaDto } from './dto/create-tipo-despesa.dto';
import { UpdateTipoDespesaDto } from './dto/update-tipo-despesa.dto';

@Injectable()
export class TipoDespesaService {
    constructor(private prisma: PrismaService) {}

    async exists(data: CreateTipoDespesaDto){
        const tipoDespesaExiste = await this.prisma.tipoDespesa.findFirst({
            where: data
        })
        
        if(tipoDespesaExiste){
            return true;
        }else{
            return false;
        }
    }

    async create(data: CreateTipoDespesaDto){
        
        if(!(await this.exists(data))){
            const tipoDespesa = await this.prisma.tipoDespesa.create({
                data
            });
    
            return tipoDespesa;
        }else{
            throw new Error("Tipo de Despesa já existe!")    
        }
       
    }

    async findAll() {
        return await this.prisma.tipoDespesa.findMany()
    }

    async findOne(id: number) {
        return await this.prisma.tipoDespesa.findUnique({
            where: {
                idTipo: id
            }
        })
    }

    async update(id: number, data: UpdateTipoDespesaDto) {
        const tipoDespesaExiste = await this.prisma.tipoDespesa.findUnique({
            where: {
                idTipo: id
            }
        })

        if(!tipoDespesaExiste) {
            throw new Error("Tipo despesa não existe")
        }

        return await this.prisma.tipoDespesa.update({
            data,
            where: {
                idTipo: id
            }
        })

    }

    async delete(id: number) {
        const tipoDespesaExiste = await this.prisma.tipoDespesa.findUnique({
            where: {
                idTipo: id
            }
        })

        if(!tipoDespesaExiste) {
            throw new Error("Colaborador não existe")
        }

        return await this.prisma.tipoDespesa.delete({
            where: {
                idTipo: id
            }
        })
    }
}

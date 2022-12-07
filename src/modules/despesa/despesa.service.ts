import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';

@Injectable()
export class DespesaService {
    constructor(private prisma: PrismaService) {}

    async exists(data: CreateDespesaDto){
        const despesaExiste = await this.prisma.despesa.findFirst({
            where: data
        })
        
        if(despesaExiste){
            return true;
        }else{
            return false;
        }
    }

    async create(data: CreateDespesaDto){
        const tipoExiste = await this.prisma.tipoDespesa.findFirst({
            where: {
                idTipo: data.IdTipoDespesa
            }
        })

        if(!tipoExiste){
            throw new Error("Tipo de despesa inválido!") 
        }
        if(!(await this.exists(data))){
            const colaborador = await this.prisma.despesa.create({
                data:{
                    idMoeda: data.idMoeda,
                    valor: data.valor,
                    updatedAt: data.updatedAt,
                    dataDespesa: data.dataDespesa,
                    localDespesa: data.localDespesa,
                    idStatus: data.idStatus,
                    comentario: data.comentario,
                    imageNF: data.imageNF,
                    dateApproved: data.dateApproved,
                    TipoDespesa: {
                        connect:{
                            idTipo: data.IdTipoDespesa
                        }
                    },
                    Colaborador: {
                        connect:{
                            idColaborador: data.IdDespesaOwner
                        }
                    }
                }
            });
    
            return colaborador;
        }else{
            throw new Error("Despesa já existe!")    
        }
       
    }

    async findAll() {
        return await this.prisma.despesa.findMany()
    }

    async findOne(id: number) {
        return await this.prisma.despesa.findUnique({
            where: {
                idDespesa: id
            }
        })
    }

    async update(id: number, data: UpdateDespesaDto) {
        const despesaExiste = await this.prisma.despesa.findUnique({
            where: {
                idDespesa: id
            }
        })

        if(!despesaExiste) {
            throw new Error("Despesa não existe")
        }

        return await this.prisma.despesa.update({
            data,
            where: {
                idDespesa: id
            }
        })

    }

    async delete(id: number) {
        const despesaExiste = await this.prisma.despesa.findUnique({
            where: {
                idDespesa: id
            }
        })

        if(!despesaExiste) {
            throw new Error("Despesa não existe")
        }

        return await this.prisma.colaborador.delete({
            where: {
                idColaborador: id
            }
        })
    }
}

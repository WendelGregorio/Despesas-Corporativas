import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { DespesaDTO } from './despesa.dto';

@Injectable()
export class DespesaService {
    constructor(private prisma: PrismaService) {}

    async exists(data: DespesaDTO){
        const despesaExiste = await this.prisma.despesa.findFirst({
            where: data
        })
        
        if(despesaExiste){
            return true;
        }else{
            return false;
        }
    }

    async create(data: DespesaDTO){
        
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

    async findOne(id: string) {
        return await this.prisma.despesa.findUnique({
            where: {
                idDespesa: id
            }
        })
    }

    async update(id: string, data: DespesaDTO) {
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

    async delete(id: string) {
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

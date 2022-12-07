import { Injectable,UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { MessageHelper } from 'src/helpers/messages.helper';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';


@Injectable()
export class ColaboradorService {

    constructor(private prisma: PrismaService) {}

    async colaboradorExists(idColaborador: number){
        const colaboradorExists = await this.prisma.colaborador.findFirst({
            where: {
                idColaborador
            }
        })
        
        if(colaboradorExists){
            return true;
        }else{
            throw new Error(MessageHelper.COLABORADOR_NOT_FOUND);
        }
    }

    async exists(data: CreateColaboradorDto){
        const colaboradorExists = await this.prisma.colaborador.findFirst({
            where: data
        })
        
        if(!colaboradorExists){
            return true;
        }else{
            throw new Error(MessageHelper.COLABORADOR_ALREDY_EXISTS);
        }
    }

    async create(data: CreateColaboradorDto){
        
        if(await this.exists(data)){
            const colaborador = await this.prisma.colaborador.create({
                data,
            });
    
            return colaborador;
        }else{
            throw new Error(MessageHelper.COLABORADOR_ALREDY_EXISTS)    
        }
       
    }

    async findAll(user: any) {
        console.log(user)
        const colaborador = await this.prisma.colaborador.findUnique({
            where: {
                idColaborador: user.userId
            }
        })
        if(colaborador.idTipo == 1){
            return await this.prisma.colaborador.findMany()
        }else{
            throw new UnauthorizedException(MessageHelper.INVALID_ACTION)
        }
        
    }

    async findOne(id: number) {
        return await this.prisma.colaborador.findUnique({
            where: {
                idColaborador: id
            }
        })
    }

    async update(idColaborador: number,userToUpdateId: number, data: UpdateColaboradorDto) {
        const colaborador = await this.prisma.colaborador.findFirst({
            where:{
                idColaborador
            }
        })

        if(colaborador.idTipo == 1){
    
            await this.colaboradorExists(userToUpdateId)
    
            return await this.prisma.colaborador.update({
                data,
                where: {
                    idColaborador: userToUpdateId
                }
            })
        }else{
            throw new UnauthorizedException(MessageHelper.INVALID_ACTION)
        }
    }

    async delete(idColaborador: number, userToDeleteId: number) {
        const colaborador = await this.prisma.colaborador.findFirst({
            where:{
                idColaborador
            }
        })
        
        if(colaborador.idTipo == 1){

            await this.colaboradorExists(userToDeleteId)
    
            return await this.prisma.colaborador.delete({
                where: {
                    idColaborador: userToDeleteId
                }
            })
        }else{
            throw new UnauthorizedException(MessageHelper.INVALID_ACTION)
        }
        
    }
}

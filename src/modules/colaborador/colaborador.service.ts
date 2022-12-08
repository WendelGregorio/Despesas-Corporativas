import { Injectable,UnauthorizedException, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/PrismaService';
import { BadRequest } from '../../errors/BadRequest';
import { HttpError } from '../../errors/HttpError';
import { MessageHelper } from '../../helpers/messages.helper';
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
            throw new HttpError(HttpStatus.NOT_FOUND,'NOT_FOUND', MessageHelper.COLABORADOR_NOT_FOUND)
        }
    }

    async create(data: CreateColaboradorDto){
        try {
            const colaboradorExists = await this.prisma.colaborador.findFirst({
                where: data
            })
    
            if(!colaboradorExists){
                const colaborador = await this.prisma.colaborador.create({
                    data,
                });
        
                return colaborador;
            }else{
                throw new BadRequest(MessageHelper.COLABORADOR_ALREDY_EXISTS)  
            }    
        } catch (error) {
            if(error instanceof Prisma.PrismaClientValidationError) {
                throw new BadRequest(MessageHelper.COLABORADOR_BAD_DATA)
            }
            throw new HttpError(error.status, error.errorType, error.message)
        }
        
       
    }

    async findAll(user: any) {
        try {
            const colaborador = await this.prisma.colaborador.findUnique({
                where: {
                    idColaborador: user.userId
                }
            })
            if(colaborador.idTipo == 1){
                return await this.prisma.colaborador.findMany()
            }else{
                throw new HttpError(HttpStatus.UNAUTHORIZED,'Unauthorized', MessageHelper.INVALID_ACTION)
            }
        } catch (error) {
            if(error instanceof Prisma.PrismaClientValidationError) {
                throw new BadRequest(MessageHelper.COLABORADOR_BAD_DATA)
            }
            throw new HttpError(error.status, error.errorType, error.message)
        }
        
        
    }

    async findOne(userId: number, userIdToFind: number) {
        try {

            if(userId === userIdToFind){
                const colaboradorFind = await this.prisma.colaborador.findFirst({
                    where: {
                        idColaborador: userIdToFind
                    }
                }) 

                if(!colaboradorFind){
                    throw new HttpError(HttpStatus.NOT_FOUND,'NOT_FOUND', MessageHelper.COLABORADOR_NOT_FOUND)
                }

                return colaboradorFind
            }else{
                const colaborador = await this.prisma.colaborador.findFirst({
                    where:{
                        idColaborador: userId
                    }
                })

                if(!colaborador){
                    throw new HttpError(HttpStatus.NOT_FOUND,'NOT_FOUND', MessageHelper.COLABORADOR_NOT_FOUND)
                }

                if(colaborador.idTipo === 1){
                    const colaboradorFind = await this.prisma.colaborador.findUnique({
                        where: {
                            idColaborador: userIdToFind
                        }
                    })
                    if(!colaboradorFind){
                        throw new HttpError(HttpStatus.NOT_FOUND,'NOT_FOUND', MessageHelper.COLABORADOR_NOT_FOUND)
                    }
    
                    return colaboradorFind
                }else{
                    throw new HttpError(HttpStatus.UNAUTHORIZED,'Unauthorized', MessageHelper.INVALID_ACTION)
                }
            }
        } catch (error) {
            if(error instanceof Prisma.PrismaClientValidationError) {
                throw new BadRequest(MessageHelper.COLABORADOR_BAD_DATA)
            }
            throw new HttpError(error.status, error.errorType, error.message)
        }        
    }

    async update(idColaborador: number,userToUpdateId: number, data: UpdateColaboradorDto) {
        try {
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
                throw new HttpError(HttpStatus.UNAUTHORIZED,'Unauthorized', MessageHelper.INVALID_ACTION)
            }   
        } catch (error) {
            if(error instanceof Prisma.PrismaClientValidationError) {
                throw new BadRequest(MessageHelper.COLABORADOR_BAD_DATA)
            }
            throw new HttpError(error.status, error.errorType, error.message)
        }
    }

    async delete(idColaborador: number, userToDeleteId: number) {
        try {
            const colaborador = await this.prisma.colaborador.findFirst({
                where:{
                    idColaborador
                }
            })
            
            if(!colaborador){
                throw new HttpError(HttpStatus.NOT_FOUND,'NOT_FOUND', MessageHelper.COLABORADOR_NOT_FOUND)
            }

            if(colaborador.idTipo == 1){
    
                await this.colaboradorExists(userToDeleteId)
        
                return await this.prisma.colaborador.delete({
                    where: {
                        idColaborador: userToDeleteId
                    }
                })
            }else{
                throw new HttpError(HttpStatus.UNAUTHORIZED,'Unauthorized', MessageHelper.INVALID_ACTION)
            }
        } catch (error) {
            if(error instanceof Prisma.PrismaClientValidationError) {
                throw new BadRequest(MessageHelper.COLABORADOR_BAD_DATA)
            }
            throw new HttpError(error.status, error.errorType, error.message)
        }
    }
}

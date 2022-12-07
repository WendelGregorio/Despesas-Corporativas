import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe, UseGuards, Req, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiHeader,ApiConsumes,ApiProduces } from '@nestjs/swagger';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { ColaboradorService } from './colaborador.service';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Colaboradores')
@ApiHeader({
  name:'Authorization',
  description: 'Bearer #token-jwt'
})
@ApiConsumes('application/json')
@ApiProduces('application/json')
@Controller('colaborador')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Retorna um objeto colaborador',
    type: CreateColaboradorDto
  })
  async create(@Body() data: CreateColaboradorDto) {
    return this.colaboradorService.create(data);
  }

  @Get("getAll")
  @UseGuards(AuthGuard('jwt'))
  @ApiCreatedResponse({
    description: 'Retorna um array com objetos colaborador',
    type: [CreateColaboradorDto]
  })
  async findAll(@Req() req: any) {
    return this.colaboradorService.findAll(req.user);    
  }

  @Get("getOne")
  @UseGuards(AuthGuard('jwt'))
  @ApiCreatedResponse({
    description: 'Retorna um objeto colaborador',
    type: CreateColaboradorDto
  })
  async findOne(@Req() req: any) {
    return this.colaboradorService.findOne(req.user.userId);
  }

  @Put("update/:id")
  @UseGuards(AuthGuard('jwt'))
  @ApiCreatedResponse({
    description: 'Retorna um objeto colaborador',
    type: CreateColaboradorDto
  })
  async update(@Req() req: any, @Param("id", ParseIntPipe) id: number,@Body() data: UpdateColaboradorDto) {
    return this.colaboradorService.update(req.user.userId, id, data);
  }

  @Delete("delete/:id")
  @UseGuards(AuthGuard('jwt'))
  @ApiCreatedResponse({
    description: 'Retorna um objeto colaborador',
    type: CreateColaboradorDto
  })
  async delete(@Req() req: any, @Param("id", ParseIntPipe) id: number) {
    return await this.colaboradorService.delete(req.user.userId, id);
    
  }
}

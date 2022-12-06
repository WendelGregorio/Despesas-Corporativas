import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { ColaboradorService } from './colaborador.service';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Colaboradores')
@Controller('colaborador')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {}

  @Post()
  async create(@Body() data: CreateColaboradorDto) {
    return this.colaboradorService.create(data);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.colaboradorService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.colaboradorService.findOne(id);
  }

  @Put(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() data: UpdateColaboradorDto) {
    return this.colaboradorService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.colaboradorService.delete(id);
  }
}

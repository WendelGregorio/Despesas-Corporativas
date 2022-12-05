import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ColaboradorDTO } from './colaborador.dto';
import { ColaboradorService } from './colaborador.service';

@Controller('colaborador')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {}

  @Post()
  async create(@Body() data: ColaboradorDTO) {
    return this.colaboradorService.create(data);
  }

  @Get()
  async findAll() {
    return this.colaboradorService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.colaboradorService.findOne(id);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: ColaboradorDTO) {
    return this.colaboradorService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.colaboradorService.delete(id);
  }
}
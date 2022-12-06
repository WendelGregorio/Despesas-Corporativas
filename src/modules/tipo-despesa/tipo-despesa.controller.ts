import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTipoDespesaDto } from './dto/create-tipo-despesa.dto';
import { UpdateTipoDespesaDto } from './dto/update-tipo-despesa.dto';
import { TipoDespesaService } from './tipo-despesa.service';

@ApiTags('Tipos de Despesas')
@Controller('tipo-despesa')
export class TipoDespesaController {
  constructor(private readonly tipoDespesaService: TipoDespesaService) {}

  @Post()
  async create(@Body() data: CreateTipoDespesaDto) {
    return this.tipoDespesaService.create(data);
  }

  @Get()
  async findAll() {
    return this.tipoDespesaService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.tipoDespesaService.findOne(id);
  }

  @Put(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() data: UpdateTipoDespesaDto) {
    return this.tipoDespesaService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.tipoDespesaService.delete(id);
  }
}

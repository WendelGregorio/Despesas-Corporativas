import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateTipoDespesaDto } from './dto/create-tipo-despesa.dto';
import { UpdateTipoDespesaDto } from './dto/update-tipo-despesa.dto';
import { TipoDespesaService } from './tipo-despesa.service';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Tipos de Despesas')
@UseGuards(AuthGuard('jwt'))
@Controller('tipo-despesa')
export class TipoDespesaController {
  constructor(private readonly tipoDespesaService: TipoDespesaService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Retorna um objeto tipo-despesa',
    type: CreateTipoDespesaDto
  })
  async create(@Body() data: CreateTipoDespesaDto) {
    return this.tipoDespesaService.create(data);
  }

  @Get()
  @ApiCreatedResponse({
    description: 'Retorna um array de objetos tipo-despesa',
    type: [CreateTipoDespesaDto]
  })
  async findAll() {
    return this.tipoDespesaService.findAll();
  }

  @Get(":id")
  @ApiCreatedResponse({
    description: 'Retorna um objeto tipo-despesa',
    type: CreateTipoDespesaDto
  })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.tipoDespesaService.findOne(id);
  }

  @Put(":id")
  @ApiCreatedResponse({
    description: 'Retorna um objeto tipo-despesa',
    type: CreateTipoDespesaDto
  })
  async update(@Param("id", ParseIntPipe) id: number, @Body() data: UpdateTipoDespesaDto) {
    return this.tipoDespesaService.update(id, data);
  }

  @Delete(":id")
  @ApiCreatedResponse({
    description: 'Retorna um objeto tipo-despesa',
    type: CreateTipoDespesaDto
  })
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.tipoDespesaService.delete(id);
  }
}

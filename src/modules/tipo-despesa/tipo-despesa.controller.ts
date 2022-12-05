import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { TipoDespesaDTO } from './tipo-despesa.dto';
import { TipoDespesaService } from './tipo-despesa.service';

@Controller('tipo-despesa')
export class TipoDespesaController {
  constructor(private readonly tipoDespesaService: TipoDespesaService) {}

  @Post()
  async create(@Body() data: TipoDespesaDTO) {
    return this.tipoDespesaService.create(data);
  }

  @Get()
  async findAll() {
    return this.tipoDespesaService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    return this.tipoDespesaService.findOne(id);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() data: TipoDespesaDTO) {
    return this.tipoDespesaService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return this.tipoDespesaService.delete(id);
  }
}

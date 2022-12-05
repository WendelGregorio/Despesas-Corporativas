import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { DespesaDTO } from './despesa.dto';
import { DespesaService } from './despesa.service';

@Controller('despesa')
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}

  @Post()
  async create(@Body() data: DespesaDTO) {
    return this.despesaService.create(data);
  }

  @Get()
  async findAll() {
    return this.despesaService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.despesaService.findOne(id);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: DespesaDTO) {
    return this.despesaService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.despesaService.delete(id);
  }
}

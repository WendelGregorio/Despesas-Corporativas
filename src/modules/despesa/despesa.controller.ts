import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { DespesaService } from './despesa.service';

@ApiTags('Despesas')
@Controller('despesa')
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}

  @Post()
  async create(@Body() data: CreateDespesaDto) {
    return this.despesaService.create(data);
  }

  @Get()
  async findAll() {
    return this.despesaService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.despesaService.findOne(id);
  }

  @Put(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() data: UpdateDespesaDto) {
    return this.despesaService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.despesaService.delete(id);
  }
}

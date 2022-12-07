import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags,ApiCreatedResponse } from '@nestjs/swagger';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { DespesaService } from './despesa.service';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Despesas')
@UseGuards(AuthGuard('jwt'))
@Controller('despesa')
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Retorna um objeto despesa',
    type: CreateDespesaDto
  })
  async create(@Body() data: CreateDespesaDto) {
    return this.despesaService.create(data);
  }

  @Get()
  @ApiCreatedResponse({
    description: 'Retorna um array de objetos despesa',
    type: [CreateDespesaDto]
  })
  async findAll() {
    return this.despesaService.findAll();
  }

  @Get(":id")
  @ApiCreatedResponse({
    description: 'Retorna um objeto despesa',
    type: CreateDespesaDto
  })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.despesaService.findOne(id);
  }

  @Put(":id")
  @ApiCreatedResponse({
    description: 'Retorna um objeto despesa',
    type: CreateDespesaDto
  })
  async update(@Param("id", ParseIntPipe) id: number, @Body() data: UpdateDespesaDto) {
    return this.despesaService.update(id, data);
  }

  @Delete(":id")
  @ApiCreatedResponse({
    description: 'Retorna um objeto despesa',
    type: CreateDespesaDto
  })
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.despesaService.delete(id);
  }
}

import { PartialType } from '@nestjs/swagger';
import { CreateTipoDespesaDto } from './create-tipo-despesa.dto';

export class UpdateTipoDespesaDto extends PartialType(CreateTipoDespesaDto) {}

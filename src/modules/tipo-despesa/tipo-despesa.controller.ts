import { Controller } from '@nestjs/common';
import { TipoDespesaService } from './tipo-despesa.service';

@Controller('tipo-despesa')
export class TipoDespesaController {
  constructor(private readonly tipoDespesaService: TipoDespesaService) {}
}

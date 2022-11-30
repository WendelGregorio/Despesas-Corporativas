import { Controller } from '@nestjs/common';
import { DespesaService } from './despesa.service';

@Controller('despesa')
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}
}

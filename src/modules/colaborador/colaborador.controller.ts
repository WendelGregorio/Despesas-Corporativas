import { Controller } from '@nestjs/common';
import { ColaboradorService } from './colaborador.service';

@Controller('colaborador')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {}
}

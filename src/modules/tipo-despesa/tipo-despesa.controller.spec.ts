import { Test, TestingModule } from '@nestjs/testing';
import { TipoDespesaController } from './tipo-despesa.controller';
import { TipoDespesaService } from './tipo-despesa.service';

describe('TipoDespesaController', () => {
  let controller: TipoDespesaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDespesaController],
      providers: [TipoDespesaService],
    }).compile();

    controller = module.get<TipoDespesaController>(TipoDespesaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

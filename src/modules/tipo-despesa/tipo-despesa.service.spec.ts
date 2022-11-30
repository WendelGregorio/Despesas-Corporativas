import { Test, TestingModule } from '@nestjs/testing';
import { TipoDespesaService } from './tipo-despesa.service';

describe('TipoDespesaService', () => {
  let service: TipoDespesaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoDespesaService],
    }).compile();

    service = module.get<TipoDespesaService>(TipoDespesaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

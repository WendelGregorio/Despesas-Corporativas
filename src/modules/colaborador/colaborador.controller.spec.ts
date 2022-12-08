import { Test, TestingModule } from '@nestjs/testing';
import { HttpError } from '../../errors/HttpError';
import { PrismaService } from '../../database/PrismaService';
import { ColaboradorController } from './colaborador.controller'
import { ColaboradorService } from './colaborador.service';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';

const colaboradorList: CreateColaboradorDto[] = [
    new CreateColaboradorDto({
        nome: "Jorge",
        registro: "0002",
        senha: "0002"
    })
]

const newColaboradorEntity = new CreateColaboradorDto({
    nome:"Jonas",
    registro:"5",
    senha:"5",
    saldo:550,
    idTipo: 2
})

describe('ColaboradorService', () => {
  let colaboradorController: ColaboradorController;
  let colaboradorService: ColaboradorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColaboradorController],
      providers: [{
        provide:ColaboradorService,
        useValue:{
            findAll: jest.fn().mockResolvedValue(colaboradorList),
            findOne: jest.fn().mockResolvedValue(newColaboradorEntity),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        }
      }, PrismaService]
    }).compile();

    colaboradorController = module.get<ColaboradorController>(ColaboradorController);
    colaboradorService = module.get<ColaboradorService>(ColaboradorService);
  });

  it('ColaboradorController and ColaboradorService should be defined', () => {
    expect(colaboradorController).toBeDefined();
    expect(colaboradorService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a colaborador list entity successfully', async () => {
        // Act
        const result = await colaboradorController.findAll({ userId: 4, userRegistro: '40553' });

        // Assert
        expect(result).toEqual(colaboradorList)
    })

    it('should throw an exception', () => {
        // Arrange
        jest.spyOn(colaboradorService, 'findAll').mockRejectedValueOnce(HttpError)

        // Assert
        expect(colaboradorController.findAll({ userId: 1, userRegistro: '40553' })).rejects.toThrowError()

    })
  })

  describe('create', () => {
    it('should create a new colaborador successfully and return colaborador', async () => {
        // Act
        const body = { 
            nome:"Jonas",
            registro:"5",
            senha:"5",
            saldo:550,
            idTipo: 2 
        }
        const result = await colaboradorController.create(body);
        console.log(result)
        // Assert
        expect(result).toEqual(newColaboradorEntity)
    })
  })

});
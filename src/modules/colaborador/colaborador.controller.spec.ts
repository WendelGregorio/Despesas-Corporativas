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

const colaborador: CreateColaboradorDto = new CreateColaboradorDto({
      nome: "Jorge",
      registro: "0002",
      senha: "0002"
  })

type tokenJWT = {
  token: string;
}

const token: tokenJWT = {
  token:"asdofijioavmzxcnnlkajfasd"
}

describe('ColaboradorController', () => {
  let colaboradorController: ColaboradorController;
  let colaboradorService: ColaboradorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColaboradorController],
      providers: [{
        provide:ColaboradorService,
        useValue:{
            findAll: jest.fn().mockResolvedValue(colaboradorList),
            create: jest.fn().mockResolvedValue(token),
            findOne: jest.fn().mockResolvedValue(colaborador),            
            update: jest.fn().mockResolvedValue(colaborador),
            delete: jest.fn().mockResolvedValue(colaborador),
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
        expect(colaboradorService.findAll).toHaveBeenCalledTimes(1)
    })

    it('should throw an exception', () => {
        // Arrange
        jest.spyOn(colaboradorService, 'findAll').mockRejectedValueOnce(HttpError)

        // Assert
        expect(colaboradorController.findAll({ userId: 1, userRegistro: '40553' })).rejects.toThrowError()

    })
  })

  describe('create', () => {
    it('should create a new colaborador and return colaborador', async () => {
      // Act

      const data = {
        nome:"Carlos",
        registro:"30",
        senha:"30",
        saldo:500,
        idTipo:2
      }
      const result = await colaboradorController.create(data);

      // Assert
      expect(result).toBe(token)
      expect(colaboradorService.create).toHaveBeenCalledTimes(1)
    })

    it('should throw an exception', () => {
      // Arrange
      const data = {
        nome:"Carlos",
        registro:"30",
        senha:"30",
        saldo:500,
        idTipo:2
      }
      jest.spyOn(colaboradorService, 'create').mockRejectedValueOnce(HttpError)

      // Assert
      expect(colaboradorController.create(data)).rejects.toThrowError()

    })
  })

  describe('findOne', () => {
    it('should return a colaborador', async () => {
      // Act
      const result = await colaboradorController.findOne({ user: {userId: 4, userRegistro: '40553'} }, 8);
      // Assert
      expect(result).toEqual(colaborador)
      expect(colaboradorService.findOne).toHaveBeenCalledTimes(1)
    })
    it('should throw an exception', () => {
      // Arrange
      jest.spyOn(colaboradorService, 'findOne').mockRejectedValueOnce(HttpError)

      // Assert
      expect(colaboradorController.findOne({ user: {userId: 4, userRegistro: '40553'} }, 8)).rejects.toThrowError()

    })
  })

  describe('update', () => {
    it('should update a colaborador', async () => {
      // Act
      const result = await colaboradorController.update({ user: {userId: 4, userRegistro: '40553'} }, 8, { nome: "Jonas"});

      // Assert
      expect(result).toEqual(colaborador)
      expect(colaboradorService.update).toHaveBeenCalledTimes(1)
    })

    it('should throw an exception', () => {
      // Arrange
      jest.spyOn(colaboradorService, 'update').mockRejectedValueOnce(HttpError)

      // Assert
      expect(colaboradorController.update({ user: {userId: 4, userRegistro: '40553'} }, 8, { nome: "Jonas"})).rejects.toThrowError()

    })
  })

  describe('delete', () => {
    it('should delete a colaborador', async () => {
      // Act
      const result = await colaboradorController.delete({ user: {userId: 4, userRegistro: '40553'} }, 3);

      // Assert
      expect(result).toEqual(colaborador)
      expect(colaboradorService.delete).toHaveBeenCalledTimes(1)
    })

    it('should throw an exception', () => {
      // Arrange
      jest.spyOn(colaboradorService, 'delete').mockRejectedValueOnce(HttpError)

      // Assert
      expect(colaboradorController.delete({ user: {userId: 1, userRegistro: '40553'} }, 12)).rejects.toThrowError()

    })
  })
});
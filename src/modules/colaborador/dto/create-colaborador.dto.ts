import { ApiProperty } from "@nestjs/swagger";

export class CreateColaboradorDto {

    @ApiProperty({
        description:'Nome do colaborador',
        example:'Wendel Gregorio'
    })
    nome: string;

    @ApiProperty({
        description:'Registro do colaborador',
        example:'40553'
    })
    registro: string;

    @ApiProperty({
        description:'Senha do colaborador',
        example:'40553'
    })
    senha: string;

    @ApiProperty({
        description:'O saldo é valor de andiantamento que o colaborador recebeu para utilizar com as despesas',
        example:'300.50'
    })
    saldo:          number;

    @ApiProperty({
        description:'O campo createdAt server apenas para registrar quando o colaborador foi adicionado à base de dados'
    })
    createdAt?:     Date;

    @ApiProperty({
        description:'O campo updatedAt server apenas para registrar quando as informações do colaborador foram atualizadas'
    })
    updatedAt?:  Date = new Date();

    @ApiProperty({
        description:'O idTipo serve para identificar o tipo de colaborador e as permissões e restrições do mesmo',
        example:'1'
    })
    idTipo:         number;
}
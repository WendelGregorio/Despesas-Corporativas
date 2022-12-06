import { ApiProperty } from "@nestjs/swagger";

export class ColaboradorDTO {
    
    @ApiProperty({
        description:'idColaborador é o número de matrícula do colaborador, utilizado para associar às despesas',
        example:'40553'
    })
    idColaborador: string;

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
    updatedAt:      Date;

    @ApiProperty({
        description:'O idTipo serve para identificar o tipo de colaborador e as permissões e restrições do mesmo',
        example:'1'
    })
    idTipo:         number;
}
import { ApiProperty } from "@nestjs/swagger";

export class CreateDespesaDto {
    @ApiProperty({
        description:'ID da despesa gerado pelo banco',
        example:'1'
    })
    IdDespesaOwner: number;

    @ApiProperty({
        description:'ID tipo da despesa, que deve ser igual a um tipo já existente na tabela tipo-despesa',
        example:'1'
    })
    IdTipoDespesa:  number;

    @ApiProperty({
        description:'ID da moeda utilizada na despesa',
        example:'1'
    })
    idMoeda:        number;

    @ApiProperty({
        description:'Valor atribuido à despesa',
        example:'250.90'
    })
    valor:          number;

    @ApiProperty({
        description:'Data de criação da despesa gerada pelo banco de dados'
    })
    createdAt:      Date;

    @ApiProperty({
        description:'Data de atualização da despesa atualizada a cada operação de atualização que é feita'
    })
    updatedAt:      Date;

    @ApiProperty({
        description:'Data na qual a despesa foi realizada'
    })
    dataDespesa:    Date;

    @ApiProperty({
        description:'Local onde a despesa foi realizada',
        example:'Brasil - São Bernardo'
    })
    localDespesa:   string;

    @ApiProperty({
        description:'Comentário para informações extras se for necessário',
        example:'Gastos excedidos devido a escolha de estabelicimento para refeição da parte do cliente'
    })
    comentario?:     string;
    
    @ApiProperty({
        description:'Imagem da nota fiscal da despesa se houver a possíbilidade de anexar',
        example:'imagemNF.png'
    })
    imageNF?:        string;
    
    @ApiProperty({
        description:'Status da despesa: Aprovada, Computada, Reprovada',
        example:'1'
    })
    idStatus:       number;
    
    @ApiProperty({
        description:'Data de aprovação da despesa',
        example:'1'
    })
    dateApproved:   Date;
}
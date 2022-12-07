import { ApiProperty } from "@nestjs/swagger";

export class CreateTipoDespesaDto {
    @ApiProperty({
        description:'ID do tipo de despesa',
        example:'1'
    })
    idTipo:             number;

    @ApiProperty({
        description:'Descrição do tipo de despesa',
        example:'Viagem'
    })
    descricaoTipo:      string;
}
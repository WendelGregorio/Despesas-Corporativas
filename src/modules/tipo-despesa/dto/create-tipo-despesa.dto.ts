import { ApiProperty } from "@nestjs/swagger";

export class CreateTipoDespesaDto {
    @ApiProperty()
    idTipo:             number;

    @ApiProperty()
    descricaoTipo:      string;
}
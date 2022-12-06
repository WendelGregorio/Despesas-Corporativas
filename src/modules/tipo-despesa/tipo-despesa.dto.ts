import { ApiProperty } from "@nestjs/swagger";

export class TipoDespesaDTO {
    @ApiProperty()
    idTipo:             number;

    @ApiProperty()
    descricaoTipo:      string;
}
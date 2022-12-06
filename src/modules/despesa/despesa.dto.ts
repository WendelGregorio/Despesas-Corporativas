import { ApiProperty } from "@nestjs/swagger";

export class DespesaDTO {
    @ApiProperty()
    idDespesa?:      string;

    @ApiProperty()
    idFat?:          string;

    @ApiProperty()
    IdDespesaOwner: string;

    @ApiProperty()
    IdTipoDespesa:  number;

    @ApiProperty()
    idMoeda:        number;

    @ApiProperty()
    valor:          number;

    @ApiProperty()
    createdAt:      Date;

    @ApiProperty()
    updatedAt:      Date;

    @ApiProperty()
    dataDespesa:    Date;

    @ApiProperty()
    localDespesa:   string;

    @ApiProperty()
    comentario?:     string;
    
    @ApiProperty()
    imageNF?:        string;
    
    @ApiProperty()
    idStatus:       number;
    
    @ApiProperty()
    dateApproved:   Date;
}
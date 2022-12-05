import { ApiProperty } from "@nestjs/swagger";

export type ColaboradorDTO = {
    
    @ApiProperty()
    idColaborador: string;

    @ApiProperty()
    saldo:          number;

    @ApiProperty()
    createdAt?:     Date;

    @ApiProperty()
    updatedAt:      Date;

    @ApiProperty()
    idTipo:         number;
}
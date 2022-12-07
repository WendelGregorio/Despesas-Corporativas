import { ApiProperty } from "@nestjs/swagger";

export class LoginDto{
    @ApiProperty({
        description:'Registro do colaborador',
        example:'40553'
    })
    registro: string;
    @ApiProperty({
        description:'Senha do colaborador',
        example:'1234'
    })
    senha: string;
}
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto{
    @ApiProperty()
    registro: string;
    @ApiProperty()
    senha: string;
}
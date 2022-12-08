import { PassportStrategy } from "@nestjs/passport";
import { Injectable, HttpStatus } from '@nestjs/common'
import { Strategy } from "passport-local";
import { AuthService } from "src/modules/auth/auth.service";
import { MessageHelper } from "src/helpers/messages.helper";
import { HttpError } from "src/errors/HttpError";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService){
        super({ usernameField: 'registro', passwordField: 'senha' })     
    }

    async validate(registro: string, senha: string){
        const colaborador = await this.authService.validadeColaborador(registro, senha)
        
        if(!colaborador) throw new HttpError(HttpStatus.NOT_FOUND,'NOT_FOUND', MessageHelper.COLABORADOR_NOT_FOUND)

        return colaborador
    }
}
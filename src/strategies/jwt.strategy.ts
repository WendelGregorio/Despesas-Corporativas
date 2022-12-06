import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt } from "passport-jwt";
import { Injectable } from '@nestjs/common'
import { ApiPayloadTooLargeResponse } from "@nestjs/swagger";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_KEY,
          })
    }

    async validate(payload: any) {
        return { userId: payload.id, userRegistro: payload.registro, userType: payload.colaboradorType}
    }
}
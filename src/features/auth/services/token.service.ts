import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {ENV_KEYS} from "src/core/config/env.keys"

@Injectable()

export class TokenService{
    constructor(private readonly jwtService:JwtService){}
    async createToken(user:any){
        const payload = { sub: user.id, email: user.email };
        const accessToken = await this.jwtService.signAsync(payload , {
            secret:process.env[ENV_KEYS.ACCESS_TOKEN_SECRET],
            expiresIn:'15m'
        })
        const refreshToken = await this.jwtService.signAsync(payload,{
            secret: process.env[ENV_KEYS.REFRESH_TOKEN_SECRET],
            expiresIn:'7d'
        })

        return {accessToken,refreshToken}
    }
}
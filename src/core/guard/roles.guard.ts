import { Injectable, CanActivate, ExecutionContext, BadRequestException } from "@nestjs/common";
import { Observable } from "rxjs";
@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest()
        const isAuth = request.headers.authorization === "token"
        if(!isAuth){
            throw new BadRequestException("you didn't log in")
        }
        return isAuth
    }
}
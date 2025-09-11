import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { UserRoles } from "../db/enum/user_roles.enum";
import { JwtAuthGuard } from "../guard/jwt_auth.guard";
import { RolesGuard } from "../guard/roles.guard";
import { ApiBearerAuth, ApiUnauthorizedResponse } from "@nestjs/swagger";

export const ROLES_KEY = 'roles'

export const Auth = (roles?:UserRoles[])=>{
    return applyDecorators(
        SetMetadata(ROLES_KEY,roles ?? Object.values(UserRoles)),
        UseGuards(JwtAuthGuard,RolesGuard),
        ApiBearerAuth('Authorization'),
        ApiUnauthorizedResponse({ description: 'Unauthorized' })
    )
}
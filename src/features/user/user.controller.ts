import { Body, Controller, Delete, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from 'src/core/guard/roles.guard';
import { CreateUserDto } from './dto/create-user-dto';
import {Auth} from 'src/core/decorators/auth.decorator'
import { UserRoles } from 'src/core/db/enum/user_roles.enum';

@Controller('user')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create") 
  async createUser(@Body() createUserDto:CreateUserDto){
    await this.userService.create(createUserDto)
    return {message:"user created successfully"}
  }
  @Delete(":id")
  @Auth()
  
  async deleteUser(@Param("id") id:string){
    await this.userService.delete(Number(id))
  }

}

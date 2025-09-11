import { Body, Controller, Delete, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from 'src/core/guard/roles.guard';
import { CreateUserDto } from './dto/user-dto';
import {Auth} from 'src/core/decorators/auth.decorator'
import { UserRoles } from 'src/core/db/enum/user_roles.enum';

@Controller('user')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create") 
  async createData(@Body() createUserDto:CreateUserDto){
    await this.userService.create(createUserDto)
    return {message:"user is data created successfully"}
  }
  @Delete(":id")  
  async deleteData(@Param("id") id:string){
    await this.userService.delete(id)
  }

}

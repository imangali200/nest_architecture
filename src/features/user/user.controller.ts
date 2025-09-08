import { Body, Controller, Delete, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/core/guard/roles.guard';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create") 
  async createUser(@Body() createUserDto:CreateUserDto){
    await this.userService.create(createUserDto)
    return {message:"user created successfully"}
  }
  @Delete(":id")
  async deleteUser(@Param("id") id:string){
    await this.userService.delete(Number(id))
  }

}

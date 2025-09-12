import { Body, Controller, Delete, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RolesGuard } from 'src/core/guard/roles.guard';
import { CreateUserDto } from './dto/user-dto';
import {Auth} from 'src/core/decorators/auth.decorator'
import { UserRoles } from 'src/core/db/enum/user_roles.enum';
import { User } from 'src/core/db/entities/user.entity';

@Controller('user')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiBody({
    type:CreateUserDto 
  })
  @ApiResponse({
    type:User
  })
  @Post("create") 
  async createData(@Body() createUserDto:CreateUserDto){
    await this.userService.create(createUserDto)
    return {message:"user is data created successfully"}
  }
  @Delete(":id")  
  @ApiResponse({status:204,description:"deleted successfully"})
  async deleteData(@Param("id") id:string){
    await this.userService.delete(id)
  }

}

import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({type:RegisterDto})
  @Post('register')
  async register(@Body() registerDto:RegisterDto){
    return await this.authService.register(registerDto)
  }

  @ApiBody({type:LoginDto})
  @Post("login")
  async login(@Body() loginDto:LoginDto){
    return await this.authService.login(loginDto)
  }

}

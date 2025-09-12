import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthEntity } from 'src/core/db/entities/auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiBody({ type: RegisterDto })
  @ApiResponse({
    type: AuthEntity
  })
  @Post('register')
  @ApiResponse({
    type: AuthEntity
  })
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto)
  }

  @ApiBody({ type: LoginDto })
  @ApiResponse({
    type: AuthEntity
  })
  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto)
  }

}

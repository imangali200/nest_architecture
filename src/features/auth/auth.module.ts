import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { TokenService } from './services/token.service';
import { JwtModule } from '@nestjs/jwt';
import { ENV_KEYS } from 'src/core/config/env.keys';

@Module({
  controllers: [AuthController],
  providers: [AuthService, TokenService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env[ENV_KEYS.ACCESS_TOKEN_SECRET] || 'super-secret',
      signOptions: { expiresIn: '15m' },
    }),
  ],
  exports: [TokenService],
})
export class AuthModule {}

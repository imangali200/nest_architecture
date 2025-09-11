import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../core/db/entities/user.entity';
import { AuthEntity } from 'src/core/db/entities/auth.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,AuthEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}

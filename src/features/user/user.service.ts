import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../core/db/entities/user.entity';
import { Auth, Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-dto';
import { RegisterDto } from '../auth/dto/register.dto';
import { AuthEntity } from 'src/core/db/entities/auth.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(AuthEntity)
    private readonly authRepository:Repository<AuthEntity>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userData = this.userRepository.create(createUserDto)
    return await this.userRepository.save(userData)
  }
  async delete(id:string){
    
    const deleted = await this.userRepository.delete(id)
    if (!deleted) throw new BadRequestException("not deleted")
    return 
  }

  async findByEmail(email:string){
    return this.authRepository.findOne({
      where:{email}
    })
  }
  async createOne(registerDto:RegisterDto & {hashPassword:string}){
    const newUser = this.authRepository.create({
      ...registerDto,
      password:registerDto.hashPassword
    })

    return await this.authRepository.save(newUser)
  }
}

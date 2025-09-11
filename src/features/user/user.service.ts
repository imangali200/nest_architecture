import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../core/db/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { RegisterDto } from '../auth/dto/register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,


  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto)
    return await this.userRepository.save(newUser)
  }
  async delete(id:number){
    await this.userRepository.delete(id)
    return{message:'deleted'}
  }

  async findByEmail(email:string){
    return this.userRepository.findOne({
      where:{email}
    })
  }
  async createOne(registerDto:RegisterDto & {hashPassword:string}){
    const newUser = this.userRepository.create({
      ...registerDto,
      password:registerDto.hashPassword
    })

    return await this.userRepository.save(newUser)
  }
}

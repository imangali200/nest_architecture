import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { UserService } from '../../user/user.service';
import { RegisterDto } from '../dto/register.dto';
import * as bcrypt from 'bcrypt';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly tokenService:TokenService
    ) { }
    async login(loginDto: LoginDto) {
        const user = await this.userService.findByEmail(loginDto.email)
        if (!user) throw new NotFoundException("user not find")

        const isPasswordValid = await bcrypt.compare(
            loginDto.password,
            user.password
        )
        if (!isPasswordValid) throw new NotFoundException("invalid password")
        const token = await this.tokenService.createToken(user)
        return token
    }
    async register(registerDto: RegisterDto) {
        const user = await this.userService.findByEmail(registerDto.email)
        if (user) throw new BadRequestException("Already have email,use another email")
         
        const hashedPassword = await bcrypt.hash(registerDto.password,10)

        const createUser = await this.userService.createOne({
            ...registerDto,
            hashPassword:hashedPassword,
        })
        if(!createUser) throw new NotFoundException("not created")
        const token = await this.tokenService.createToken(createUser)   
        return token
    }

}

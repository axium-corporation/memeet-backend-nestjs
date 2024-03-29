/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor (
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ){}

    async signUp(authCredentialsDto:AuthCredentialsDto): Promise<void> {
        try {
            return this.userRepository.createUser(authCredentialsDto);
        } catch(e){
            console.log(e);
        }
    }
}

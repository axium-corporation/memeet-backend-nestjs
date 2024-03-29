/* eslint-disable prettier/prettier */
import { Controller, Body, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    
    @Post('/signup')
    signup(@Body() authCredentialsDto: AuthCredentialsDto):Promise<void> {
        return this.authService.signUp(authCredentialsDto);
    }
}

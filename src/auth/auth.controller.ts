import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { loginDto } from './dto/login-auth.dto';
import { verifyDto } from './dto/verify-auth.dto';
import {ApiTags} from '@nestjs/swagger'
import { AuthGuard } from 'src/shared/guards/auth.guard';

@ApiTags('Users')
@UseGuards(AuthGuard)

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
    @Post('verify')
    verify(@Body() body: verifyDto) {
      return this.authService.verify(body);
    }

  @Post('register')
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }

  @Post('login')
  login(@Body() body: loginDto) {
    return this.authService.login(body);
  }

}

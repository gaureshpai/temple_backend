// src/auth/auth.controller.ts
import { Controller, Request, Post, UseGuards, Body, HttpStatus, Res, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';


@Controller('api/auth')
export class AuthController {
  jwtService: any;
  constructor(
    private authService: AuthService,
    private readonly usersService: UsersService,

  ) { }

  @Post('register')
  async register(@Body() createuserDto: CreateUserDto, @Res() res: Response) {
    const result = await this.authService.create(createuserDto);
    return res.status(result.status).json(result)
  }


  @Post('login')
  async login(@Body() logindto: LoginDto, @Res() res: Response) {
    const user = await this.authService.login(logindto);
    return res.status(user.status).json(user);
  }

  @Post('loginadmin')
  async loginforadmin(@Body() logindto: LoginDto, @Res() res: Response) {
    const user = await this.authService.loginforadmin(logindto);
    return res.status(user.status).json(user);
  }
}

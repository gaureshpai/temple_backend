// src/auth/auth.service.ts
import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as otpGenerator from 'otp-generator';
import { Users } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { error } from 'console';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import Role from 'src/users/entities/role.enum';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) { }

  async login(logindto: LoginDto) {
    try {
      const user = await this.userService.findByEmail(logindto.email);
      if (user) {
        if (user.role == Role.User) {

          const result = await user.validatePassword(logindto.password);

          if (result) {
            const payload = { user: { email: user.email, id: user.id } };
            const access_token = this.jwtService.sign(payload);
            return {
              status: HttpStatus.OK,
              user: user,
              access_token: access_token,
            };
          } else {
            return {
              status: HttpStatus.BAD_REQUEST,
              message: 'Password is Incorrect',
            }
          }
        }
        else {
          const result = await user.validatePassword(logindto.password);
          if (result) {
            const payload = { user: { email: user.email, id: user.id } };
            const access_token = this.jwtService.sign(payload);
            return {
              status: HttpStatus.OK,
              user: user,
              access_token: access_token
            };
          } else {
            return {
              status: HttpStatus.BAD_REQUEST,
              message: 'Password is Incorrect',
            };
          }
        }
      }
      else {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: 'You Do Not Have account. Please register',
        };
      }
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async loginforadmin(logindto: LoginDto) {
    try {
      const user = await this.userService.findByEmail(logindto.email);
      console.log(user)
      if (!user) {
        return { status: HttpStatus.BAD_REQUEST, message: 'User does not exist!!' };
      }
      if (user.role !== Role.Admin) {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: 'Unauthorized..Only Admins are allowed',
        };
      }
      else {
        const result = await user.validatePassword(logindto.password);
        if (result) {
          const payload = { user: { email: user.email, id: user.id } };
          const access_token = this.jwtService.sign(payload);
          return {
            status: HttpStatus.OK,
            user: user,
            access_token: access_token
          };
        } else {
          return {
            status: HttpStatus.BAD_REQUEST,
            message: 'Password is Incorrect',
          };
        }
      }
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async create(createuserDto: CreateUserDto) {
    try {
      let checkuser1 = await this.usersRepository.findOne({
        where: [
          { email: createuserDto.email }
        ],
      });
      let checkuser2 = await this.usersRepository.findOne({
        where: [
          { phone_number: createuserDto.phone_number }
        ],
      });
      if (checkuser1) {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: 'Email Already Exist Please Select a different Email',
        };
      }
      if (checkuser2) {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: 'Mobile Number Already Exist Please Select a different number',
        };
      }
      if (createuserDto.role) {
        if (!Object.values(Role).includes(createuserDto.role)) {
          return {
            status: HttpStatus.BAD_REQUEST,
            message: 'Role Does Not Exist Please select a Valid Role',
          };
        }
      }
      createuserDto.password = await bcrypt.hash(createuserDto.password, 10);
      let saveduser = await this.usersRepository.save(createuserDto);
      return { status: HttpStatus.OK, user: saveduser };
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    try {
      if (!user || !(await user.validatePassword(password))) {
        throw 'Email or Password is Incorrect';
      }
      return { status: HttpStatus.OK, user: user };
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }


  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
}

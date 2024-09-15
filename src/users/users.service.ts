import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import Role from './entities/role.enum';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>,) {
  }

  async findAll(admin_id: number) {
    try {
      const user = await this.usersRepository.findOne({ where: { id: admin_id } })
      if (!user) {
        return { status: HttpStatus.OK, message: "User Not Registered" };
      }
      if (user.role == Role.Party || user.role == Role.User) {
        return { status: HttpStatus.OK, message: "Not Registered as Admin" };
      }
      let users = await this.usersRepository.find({ where: { role: Role.User, user_status: true }, order: { created_at: 'DESC' } });
      return { status: HttpStatus.OK, users: users };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async registerUser(createuserDto: CreateUserDto) {   //Users Directly register
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
      createuserDto.role = Role.User
      createuserDto.password = await bcrypt.hash(createuserDto.password, 10);
      let saveduser = await this.usersRepository.save(createuserDto);
      return { status: HttpStatus.OK, user: saveduser };
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.usersRepository.findOne({ where: { id, user_status: true } })
      if (!user) {
        return { status: HttpStatus.OK, message: "User Not Exists" };
      }
      return { status: HttpStatus.OK, users: user };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      let user = await this.usersRepository.findOne({ where: { id, user_status: true } })
      if (!user) {
        return { status: HttpStatus.BAD_REQUEST, message: "User Not Found" };
      }
      if (updateUserDto.password) {
        updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
      }
      Object.assign(user, updateUserDto)
      const result = await this.usersRepository.save(user)
      return { "status": HttpStatus.OK, ...result }
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async remove(id: number) {
    try {

      let existing_user = await this.usersRepository.findOne({ where: { id, user_status: true } })

      if (!existing_user) {
        return { status: HttpStatus.BAD_REQUEST, message: "User Not Found" };
      }
      existing_user.user_status = false
      let result = await this.usersRepository.save(existing_user)
      return { "status": HttpStatus.OK, "Deleted": result }

    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email, user_status: true } });
  }

  async findByMobile(phone_number: string) {
    return this.usersRepository.findOne({ where: { phone_number, user_status: true } });
  }

}

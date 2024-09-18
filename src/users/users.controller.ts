import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Headers, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register-user')   //staff onboarding self
  async registerUser(@Body() createuserDto: CreateUserDto, @Res() res: Response) {
    const result = await this.usersService.registerUser(createuserDto);
    return res.status(result.status).json(result)
  }

  @UseGuards(JwtAuthGuard)
  @Get('get-all-users')   //get all staff for admin
  async findAlluser(@Headers() header, @Res() res: Response) {
    const result = await this.usersService.findAll(header.user.id);
    return res.status(result.status).json(result)
  }

  @Get('get-user-by-id')
  async findOne(@Query('user_id') id: number, @Res() res: Response) {
    const result = await this.usersService.findOne(id);
    return res.status(result.status).json(result)
  }

  @Patch('update-user-details') //update staff details
  async update(@Query('user_id') id: number, @Body() updateUserDto: UpdateUserDto, @Res() res: Response) {
    const result = await this.usersService.update(id, updateUserDto);
    return res.status(result.status).json(result)
  }

  @Delete('delete-user') //delete staff
  async remove(@Query('id') id: number, @Res() res: Response) {
    const result = await this.usersService.remove(id);
    return res.status(result.status).json(result)
  }
}

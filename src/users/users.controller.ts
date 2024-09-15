import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register-user')   //user onboarding self
  async registerUser(@Body() createuserDto: CreateUserDto, @Res() res: Response) {
    const result = await this.usersService.registerUser(createuserDto);
    return res.status(result.status).json(result)
  }

  @UseGuards(JwtAuthGuard)
  @Get('get-all-users')   //get all users for admin
  async findAlluser(@Headers() header, @Res() res: Response) {
    const result = await this.usersService.findAll(header.user.id);
    return res.status(result.status).json(result)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

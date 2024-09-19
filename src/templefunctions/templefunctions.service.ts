import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTemplefunctionDto } from './dto/create-templefunction.dto';
import { UpdateTemplefunctionDto } from './dto/update-templefunction.dto';
import { Templefunction } from './entities/templefunction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TemplefunctionsService {
  constructor(
    @InjectRepository(Templefunction) private templefunctionRepository: Repository<Templefunction>) { }

  async create(createTemplefunctionDto: CreateTemplefunctionDto) {
    try {
      let res = await this.templefunctionRepository.save(createTemplefunctionDto);
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message }
    }
  }


  async findAll() {
    try {
      const res = await this.templefunctionRepository.find()
      if (res.length == 0) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data Empty" };
      }
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };

    }
  }


  async update(id: number, updateTemplefunctionDto: UpdateTemplefunctionDto) {
    try {
      let existingRecord = await this.templefunctionRepository.findOne({ where: { id } });
      if (!existingRecord) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data not found" };
      }
      Object.assign(existingRecord, updateTemplefunctionDto);
      const updatedRecord = await this.templefunctionRepository.save(existingRecord);
      return { status: HttpStatus.OK, result: updatedRecord };
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async remove(id: number) {
    try {
      let result = await this.templefunctionRepository.findOne({ where: { id } })
      if (!result) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data  Not Found" };
      }
      await this.templefunctionRepository.delete({ id })
      return { "status": HttpStatus.OK, "Deleted": result }

    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async findOne(id: number) {
    try {
      const res = await this.templefunctionRepository.findOne({ where: { id } })
      if (!res) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data Empty" };
      }
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };

    }
  }
}

import { HttpStatus, Injectable } from '@nestjs/common';
import { CreatePoojalistDto } from './dto/create-poojalist.dto';
import { UpdatePoojalistDto } from './dto/update-poojalist.dto';
import { Poojalist } from './entities/poojalist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PoojalistService {
  constructor(
    @InjectRepository(Poojalist) private poojalistRepo: Repository<Poojalist>) { }

  async create(createPoojalistDto: CreatePoojalistDto) {
    try {
      let res = await this.poojalistRepo.save(createPoojalistDto);
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message }
    }
  }


  async findAll() {
    try {
      const res = await this.poojalistRepo.find()
      if (res.length == 0) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data Empty" };
      }
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };

    }
  }


  async update(id: number, updatePoojalistDto: UpdatePoojalistDto) {
    try {
      let existingRecord = await this.poojalistRepo.findOne({ where: { id } });
      if (!existingRecord) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data not found" };
      }
      Object.assign(existingRecord, updatePoojalistDto);
      const updatedRecord = await this.poojalistRepo.save(existingRecord);
      return { status: HttpStatus.OK, result: updatedRecord };
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async remove(id: number) {
    try {
      let result = await this.poojalistRepo.findOne({ where: { id } })
      if (!result) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data  Not Found" };
      }
      await this.poojalistRepo.delete({ id })
      return { "status": HttpStatus.OK, "Deleted": result }

    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async findOne(id: number) {
    try {
      const res = await this.poojalistRepo.findOne({ where: { id } })
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

import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateHallbookingDto } from './dto/create-hallbooking.dto';
import { UpdateHallbookingDto } from './dto/update-hallbooking.dto';
import { Hallbooking } from './entities/hallbooking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HallbookingsService {
  constructor(
    @InjectRepository(Hallbooking) private hallbookingRepos: Repository<Hallbooking>) { }

  async create(createHallbookingDto: CreateHallbookingDto) {
    try {
      let res = await this.hallbookingRepos.save(createHallbookingDto);
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message }
    }
  }


  async findAll() {
    try {
      const res = await this.hallbookingRepos.find()
      if (res.length == 0) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data Empty" };
      }
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };

    }
  }


  async update(id: number, updateHallbookingDto: UpdateHallbookingDto) {
    try {
      let existingRecord = await this.hallbookingRepos.findOne({ where: { id } });
      if (!existingRecord) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data not found" };
      }
      Object.assign(existingRecord, updateHallbookingDto);
      const updatedRecord = await this.hallbookingRepos.save(existingRecord);
      return { status: HttpStatus.OK, result: updatedRecord };
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async remove(id: number) {
    try {
      let result = await this.hallbookingRepos.findOne({ where: { id } })
      if (!result) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data  Not Found" };
      }
      await this.hallbookingRepos.delete({ id })
      return { "status": HttpStatus.OK, "Deleted": result }

    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async findOne(id: number) {
    try {
      const res = await this.hallbookingRepos.findOne({ where: { id } })
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

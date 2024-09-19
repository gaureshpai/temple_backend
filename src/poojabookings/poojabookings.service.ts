import { HttpStatus, Injectable } from '@nestjs/common';
import { CreatePoojabookingDto } from './dto/create-poojabooking.dto';
import { UpdatePoojabookingDto } from './dto/update-poojabooking.dto';
import { Poojabooking } from './entities/poojabooking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PoojabookingsService {
  constructor(
    @InjectRepository(Poojabooking) private poojaBookingRepository: Repository<Poojabooking>) { }

  async create(createPoojabookingDto: CreatePoojabookingDto) {
    try {
      let res = await this.poojaBookingRepository.save(createPoojabookingDto);
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message }
    }
  }


  async findAll() {
    try {
      const res = await this.poojaBookingRepository.find()
      if (res.length == 0) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data Empty" };
      }
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };

    }
  }


  async update(id: number, updatePoojabookingDto: UpdatePoojabookingDto) {
    try {
      let existingRecord = await this.poojaBookingRepository.findOne({ where: { id } });
      if (!existingRecord) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data not found" };
      }
      Object.assign(existingRecord, updatePoojabookingDto);
      const updatedRecord = await this.poojaBookingRepository.save(existingRecord);
      return { status: HttpStatus.OK, result: updatedRecord };
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async remove(id: number) {
    try {
      let result = await this.poojaBookingRepository.findOne({ where: { id } })
      if (!result) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data  Not Found" };
      }
      await this.poojaBookingRepository.delete({ id })
      return { "status": HttpStatus.OK, "Deleted": result }

    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async findOne(id: number) {
    try {
      const res = await this.poojaBookingRepository.findOne({ where: { id } })
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

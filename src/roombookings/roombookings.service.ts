import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateRoombookingDto } from './dto/create-roombooking.dto';
import { UpdateRoombookingDto } from './dto/update-roombooking.dto';
import { Roombooking } from './entities/roombooking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoombookingsService {
  constructor(
    @InjectRepository(Roombooking) private roomBookingRepo: Repository<Roombooking>) { }

  async create(createRoombookingDto: CreateRoombookingDto) {
    try {
      let res = await this.roomBookingRepo.save(createRoombookingDto);
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message }
    }
  }


  async findAll() {
    try {
      const res = await this.roomBookingRepo.find()
      if (res.length == 0) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data Empty" };
      }
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };

    }
  }


  async update(id: number, updateRoombookingDto: UpdateRoombookingDto) {
    try {
      let existingRecord = await this.roomBookingRepo.findOne({ where: { id } });
      if (!existingRecord) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data not found" };
      }
      Object.assign(existingRecord, updateRoombookingDto);
      const updatedRecord = await this.roomBookingRepo.save(existingRecord);
      return { status: HttpStatus.OK, result: updatedRecord };
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async remove(id: number) {
    try {
      let result = await this.roomBookingRepo.findOne({ where: { id } })
      if (!result) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data  Not Found" };
      }
      await this.roomBookingRepo.delete({ id })
      return { "status": HttpStatus.OK, "Deleted": result }

    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async findOne(id: number) {
    try {
      const res = await this.roomBookingRepo.findOne({ where: { id } })
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

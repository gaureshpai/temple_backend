import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedback } from './entities/feedback.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback) private feedbackRepository: Repository<Feedback>) { }

  async create(createFeedbackDto: CreateFeedbackDto) {
    try {
      let res = await this.feedbackRepository.save(createFeedbackDto);
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message }
    }
  }


  async findAll() {
    try {
      const res = await this.feedbackRepository.find()
      if (res.length == 0) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data Empty" };
      }
      return { status: HttpStatus.OK, result: res };
    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };

    }
  }


  async update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    try {
      let existingRecord = await this.feedbackRepository.findOne({ where: { id } });
      if (!existingRecord) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data not found" };
      }
      Object.assign(existingRecord, updateFeedbackDto);
      const updatedRecord = await this.feedbackRepository.save(existingRecord);
      return { status: HttpStatus.OK, result: updatedRecord };
    } catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async remove(id: number) {
    try {
      let result = await this.feedbackRepository.findOne({ where: { id } })
      if (!result) {
        return { status: HttpStatus.BAD_REQUEST, message: "Data  Not Found" };
      }
      await this.feedbackRepository.delete({ id })
      return { "status": HttpStatus.OK, "Deleted": result }

    }
    catch (err) {
      return { status: HttpStatus.BAD_REQUEST, error: err.message };
    }
  }

  async findOne(id: number) {
    try {
      const res = await this.feedbackRepository.findOne({ where: { id } })
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

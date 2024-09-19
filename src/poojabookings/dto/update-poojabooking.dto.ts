import { PartialType } from '@nestjs/mapped-types';
import { CreatePoojabookingDto } from './create-poojabooking.dto';

export class UpdatePoojabookingDto extends PartialType(CreatePoojabookingDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateHallbookingDto } from './create-hallbooking.dto';

export class UpdateHallbookingDto extends PartialType(CreateHallbookingDto) {}

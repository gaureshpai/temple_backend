import { PartialType } from '@nestjs/mapped-types';
import { CreateRoombookingDto } from './create-roombooking.dto';

export class UpdateRoombookingDto extends PartialType(CreateRoombookingDto) {}

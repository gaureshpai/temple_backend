import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplefunctionDto } from './create-templefunction.dto';

export class UpdateTemplefunctionDto extends PartialType(CreateTemplefunctionDto) {}

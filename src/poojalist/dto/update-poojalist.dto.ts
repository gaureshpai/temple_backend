import { PartialType } from '@nestjs/mapped-types';
import { CreatePoojalistDto } from './create-poojalist.dto';

export class UpdatePoojalistDto extends PartialType(CreatePoojalistDto) {}

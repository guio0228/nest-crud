import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Expose()
  @IsString()
  name: string;
}

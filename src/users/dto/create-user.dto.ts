import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';
export class CreateUserDto {
  @Expose()
  @IsString()
  name: string;
}

import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, Length, IsNotEmpty, IsEmail } from 'class-validator';

export class PasswordChange {
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  oldPassword: string;
  @ApiModelProperty()
  newPassword: string;
  @ApiModelProperty()
  retypePassword: string;
}

export class Login {
  @ApiModelProperty()
  @IsEmail()
  email: string;
  @ApiModelProperty()
  @IsNotEmpty()
  password: string;
}

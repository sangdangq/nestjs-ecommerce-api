import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, Length, IsNotEmpty, IsEmail } from 'class-validator';

export class UserRegister {
    @ApiModelProperty()
    fullname: string;
    @ApiModelProperty()
    email: string;
    @ApiModelProperty()
    password: string;
    @ApiModelProperty()
    retypePassword: string;
}

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
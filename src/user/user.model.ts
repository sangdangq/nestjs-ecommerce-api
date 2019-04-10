import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNumber, IsDate, IsPhoneNumber } from 'class-validator';

export class LoginVm {
    @IsEmail()
    @IsString()
    @ApiModelProperty({example: 'user002@gmail.com'})
    email: string;

    @IsString()
    @ApiModelProperty({example: '123'})
    password: string;
}

export class TokenVm {
    @ApiModelProperty()
    refreshToken: string;

    @ApiModelProperty()
    token: string;

    @ApiModelProperty()
    expireIn: number;
}

export class UserRegisterVm {
    @IsString()
    @ApiModelProperty()
    firstName: string;

    @IsString()
    @ApiModelProperty()
    lastName: string;

    @IsEmail()
    @ApiModelProperty({example: 'user001@gmail.com'})
    email: string;

    @IsString()
    @ApiModelProperty()
    password: string;

    @IsString()
    @ApiModelProperty()
    rePassword: string;

    @IsPhoneNumber('vi-VN', {message: '+84 prefix must be add'})
    @ApiModelProperty({example: '+84333222111'})
    phoneNo: string;

    @IsNumber()
    @ApiModelProperty()
    gender: number;

    @ApiModelProperty({example: '1999-24-01'})
    dateOfBirth: Date;
}

export class RefreshTokenVm {
    @IsString()
    @ApiModelProperty()
    refreshToken: string;

    @IsEmail()
    @ApiModelProperty()
    email: string;
}
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsNumber, IsDate, IsPhoneNumber, MaxLength, IsOptional, IsBoolean } from 'class-validator';

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
    @ApiModelProperty()
    @IsString()
    @IsOptional()
    uid?: string;

    @ApiModelProperty()
    @IsString()
    address1: string;

    @ApiModelPropertyOptional()
    @IsString()
    @IsOptional()
    address2?: string;

    @ApiModelProperty()
    @IsBoolean()
    agreement: boolean;

    @ApiModelProperty({example: '1999-24-01'})
    birthday: Date;

    @ApiModelProperty()
    @IsString()
    city: string;

    @ApiModelPropertyOptional()
    @IsString()
    @IsOptional()
    company?: string;

    @ApiModelProperty()
    @IsString()
    confirm: string;

    @ApiModelProperty()
    @IsString()
    country: string;

    @ApiModelProperty({example: 'user001@gmail.com'})
    @IsEmail()
    email: string;

    @ApiModelProperty()
    @IsString()
    firstname: string;

    @ApiModelProperty()
    @IsString()
    gender: string;

    @ApiModelProperty()
    @IsString()
    lastname: string;

    @ApiModelProperty()
    @IsString()
    password: string;

    @ApiModelProperty()
    @IsString()
    confirmpassword: string;

    @ApiModelProperty({example: '123456789'})
    @MaxLength(11)
    @IsString()
    phone: string;

    @ApiModelProperty()
    @IsString()
    postcode: string;

    @ApiModelProperty()
    @IsString()
    regionstate: string;
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

export class RefreshTokenVm {
    @IsString()
    @ApiModelProperty()
    refreshToken: string;

    @IsEmail()
    @ApiModelProperty()
    email: string;
}
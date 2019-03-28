import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class LoginVm {
    @IsEmail()
    @IsString()
    @ApiModelProperty()
    email: string;

    @IsString()
    @ApiModelProperty()
    password: string;
}

export class TokenVm {
    @ApiModelProperty()
    token: string;

    @ApiModelProperty()
    expireIn: number;
}
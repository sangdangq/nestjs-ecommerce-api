import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class Login {
    @IsEmail()
    @IsString()
    @ApiModelProperty()
    email: string;

    @IsString()
    @ApiModelProperty()
    password: string;
}
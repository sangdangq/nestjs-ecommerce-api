import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsEnum, Length } from 'class-validator';

export class ClientInfo {
    @ApiModelProperty()
    @IsString()
    response_type: string;

    @ApiModelProperty()
    @IsString()
    client_id: string;

    @ApiModelProperty()
    @IsUrl()
    redirect_uri: string;

    @ApiModelProperty()
    @IsString()
    scope: string;

    @ApiModelProperty()
    @IsString()
    @Length(10, 10)
    state: string;
}
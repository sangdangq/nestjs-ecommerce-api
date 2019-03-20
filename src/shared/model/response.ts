import { ApiModelProperty } from '@nestjs/swagger';

export class ExceptionRes {
    @ApiModelProperty()
    message: string;
    @ApiModelProperty()
    statusCode: number;
    @ApiModelProperty()
    timestamp: Date;
    @ApiModelProperty()
    path: string;
}
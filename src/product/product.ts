import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber, MaxLength } from 'class-validator';

export class ProductVm {
    // @IsString()
    @ApiModelProperty()
    productId: string;

    // @MaxLength(2)
    // @IsNumber()
    @ApiModelProperty()
    discount_rate: number;

    @IsString()
    @ApiModelProperty()
    name: string;

    @IsString()
    @ApiModelProperty()
    inventory_status: string;

    // @IsNumber()
    @ApiModelProperty()
    original_price: number;

    // @IsNumber()
    @ApiModelProperty()
    price: number;

    @ApiModelProperty()
    thumbail_url: string;

    @IsString()
    @ApiModelProperty()
    url_key: string;
}
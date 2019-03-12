import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber, MaxLength } from 'class-validator';

export class ProductVm {
    // @IsString()
    @ApiModelProperty()
    productId?: string;

    @IsString()
    @ApiModelProperty()
    currency: string;

    @IsString()
    @ApiModelProperty()
    categoryId: string;

    @MaxLength(2)
    // @IsNumber()
    @ApiModelProperty()
    discountRate: number;

    // @IsNumber()
    @ApiModelProperty()
    originalPrice: number;

    // @IsNumber()
    @ApiModelProperty()
    price: number;

    @IsString()
    @ApiModelProperty()
    name: string;

    @IsString()
    @ApiModelProperty()
    inventoryStatus: string;

    @ApiModelProperty()
    thumbailUrl: string;
}
import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber, MaxLength } from 'class-validator';

export class Product {
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

export class ProductDelete {
    @MaxLength(5)
    @ApiModelProperty()
    productId: string;
}
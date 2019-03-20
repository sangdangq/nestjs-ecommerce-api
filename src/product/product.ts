import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, MaxLength, IsNumberString } from 'class-validator';

export class ProductVm {
    // @IsString()
    @ApiModelPropertyOptional()
    productId?: string;

    // @IsNumber()
    @ApiModelProperty()
    currency: number;

    // @IsString()
    @ApiModelProperty()
    categoryId: number;

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

export class ProductDeleteVm {
    @MaxLength(5)
    @ApiModelProperty()
    productId: string;
}
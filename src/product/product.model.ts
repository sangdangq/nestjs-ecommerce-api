import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  MaxLength,
  Min,
  IsUrl,
  IsOptional
} from 'class-validator';

export enum InventoryStatus {
  'Ready' = 1,
  'OutOfStock' = 2,
  'StopSales' = 3
}
export class ProductVm {
  @IsOptional()
  @IsNumber()
  @ApiModelPropertyOptional()
  productId?: number;

  @IsNumber()
  @ApiModelProperty()
  currency: number;

  @IsNumber()
  @ApiModelProperty()
  categoryId: number;

  @Min(2)
  @IsNumber()
  @ApiModelProperty()
  discountRate: number;

  @Min(1000)
  @IsNumber()
  @ApiModelProperty()
  originalPrice: number;

  @Min(1000)
  @IsNumber()
  @ApiModelProperty()
  price: number;

  @IsString()
  @ApiModelProperty()
  name: string;

  @IsString()
  @ApiModelProperty({ enum: InventoryStatus })
  inventoryStatus: InventoryStatus;

  @IsUrl()
  @ApiModelProperty()
  thumbailUrl: string;
}

export class ProductDeleteVm {
  @MaxLength(5)
  @ApiModelProperty()
  productId: string;
}

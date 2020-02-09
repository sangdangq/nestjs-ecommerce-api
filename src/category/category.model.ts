import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CategoryVm {
    @ApiModelProperty()
    // @IsOptional()
    categoryId?: number;

    @ApiModelProperty()
    @IsString()
    description: string;
}
export class CategoryDelete {
    id: number;
}
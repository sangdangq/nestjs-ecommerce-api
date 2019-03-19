import { IsString, IsOptional } from 'class-validator';

export class CategoryVm {
    // @IsOptional()
    categoryId?: number;

    @IsString()
    description: string;
}
export class CategoryDelete {
    id: number;
}
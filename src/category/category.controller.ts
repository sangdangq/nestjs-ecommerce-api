import { Controller, Get, BadRequestException, Post, Body, Put, Delete, Param} from '@nestjs/common';
import { CategoryVm } from './category.model';
import { CategorySevice } from './category.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategorySevice,
    ) {}

    @Get()
    @ApiOkResponse({type: CategoryVm, isArray: true})
    public async getCategories() {
        const categories = await this.categoryService.getCategories();
        if (!categories.length) {
            throw new BadRequestException('Failed to get categories');
        } else {
            return categories;
        }
    }

    @Post()
    @ApiOkResponse({description: 'Created successfully'})
    public async create(@Body() model: CategoryVm) {
        const category = await this.categoryService.create(model);
        if (!category) {
            throw new BadRequestException('Failed to create category');
        } else {
            return 'Created successfully';
        }
    }

    @Put()
    @ApiOkResponse({description: 'Update successfully'})
    public async update(@Body() model: CategoryVm) {
        if (!model.categoryId) {
            throw new BadRequestException('Failed to update category');
        }
        const category = await this.categoryService.update(model);
        if (!category[0]) {
            throw new BadRequestException('Failed to update category');
        } else {
            return 'Update successfully';
        }
    }

    @Delete()
    @ApiOkResponse({description: 'Delete successfully'})
    @Delete(':id')
    public async delete(@Param('id') id: number) {
        // tslint:disable-next-line:radix

        if (isNaN(id)) {
            throw new BadRequestException('Invalid model');
        }
        const category = await this.categoryService.delete(id);
        if (!category) {
            throw new BadRequestException('Failed to delete category');
        } else {
            return 'Delete successfully';
        }
    }
}

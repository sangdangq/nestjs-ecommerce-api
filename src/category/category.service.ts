import { Injectable, Inject } from '@nestjs/common';
import { CategoryVm } from './category.model';
import { Category } from './category.entity';

@Injectable()
export class CategorySevice {
    constructor(
        @Inject('CategoryRepo') private readonly categoryRepo: typeof Category,
    ) {}

    public async getCategories() {
        return this.categoryRepo.findAll();
    }

    public async create(category: CategoryVm) {
        const item = new Category();
        item.Description = category.description;
        return item.save();
    }

    public async update(category: CategoryVm) {
        return this.categoryRepo.update({
            Description: category.description,
        }, {
            where: {
                CategoryId: category.categoryId,
            },
        });
    }

    public async delete(id: number) {
        return this.categoryRepo.destroy({
            where: { CategoryId: id},
        });
    }
}
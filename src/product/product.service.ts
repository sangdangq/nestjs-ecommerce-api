import { ProductEnt } from './product.entity';
import { Injectable, Inject } from '@nestjs/common';
import { ProductVm } from './product';

@Injectable()
export class ProductService {
    constructor(
        @Inject('ProductRepository') private readonly productRepo: typeof ProductEnt,
    ) {}

    public async getProductById(id: string) {
        this.productRepo.findOne({
            where: { productId : id },
        }).then(data => {
            return data;
        }).catch(err => {
        });
    }

    public getProductList(listProd: string[]) {
        const productList = [];
        listProd.forEach(item => {
            this.productRepo.findOne({
                where: { productId: item },
            }).then(product => {
                productList.push(product);
            });
        });
        return productList;
    }

    public async create(prod: ProductVm): Promise<ProductEnt> {
        const product = new ProductEnt();
        product.discount_rate = prod.discount_rate;
        product.name = prod.name;
        product.inventory_status = prod.inventory_status;
        product.original_price = prod.original_price;
        product.price = prod.price;
        product.thumbail_url = prod.thumbail_url;
        product.url_key = prod.url_key;
        return product.save();
    }
}
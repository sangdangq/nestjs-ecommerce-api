import { ProductEnt } from './product.entity';
import { Injectable, Inject } from '@nestjs/common';
import { Product } from './product';

@Injectable()
export class ProductService {
    constructor(
        @Inject('ProductRepository') private readonly productRepo: typeof ProductEnt,
    ) {}

    public async getProductById(id: string) {
        return await this.productRepo.findOne({
            where: { productId: 1 },
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

    public async create(prod: Product) {
        const product = new ProductEnt();
        product.discountRate = prod.discountRate;
        product.name = prod.name;
        product.inventoryStatus = prod.inventoryStatus;
        product.originalPrice = prod.originalPrice;
        product.price = prod.price;
        product.thumbailUrl = prod.thumbailUrl;
        await this.convertNametoUrl(prod.name).then(urlKey => product.urlKey = urlKey);
        return product.save();
    }

    public async convertNametoUrl(str: string): Promise<string> {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
        str = str.replace(/Đ/g, 'D');
        const splitString = str.split(' ');
        let urlKey = '';
        splitString.map(item => {
            urlKey = urlKey + item + '-';
        });
        await this.productRepo.findAll({
            limit: 1,
            order: [['productId', 'DESC']],
        }).then(maxNumber => {
            if (maxNumber.length > 0) {
                urlKey += 'p' + (maxNumber[0].productId + 1);
            } else {
                urlKey += 'p1';
            }
        });
        return urlKey;
    }

    public async update(prod: Product) {
        return this.productRepo.update({
            categoryId: prod.categoryId,
            name: prod.name,
            currency: prod.currency,
            discountRate: prod.discountRate,
            inventoryStatus: prod.inventoryStatus,
            originalPrice: prod.originalPrice,
            price: prod.price,
            thumbailUrl: prod.thumbailUrl,
            urlKey: await this.convertNametoUrl(prod.name).then(url => {
                return url;
            }),
        },
        {
            where: { productId: prod.productId},
        });
    }

    public async deletebyId(id: string) {
        return this.productRepo.destroy({
            where: { productId: id},
        });
    }
}
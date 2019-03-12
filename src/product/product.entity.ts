import { Table, PrimaryKey, Column, Model, AutoIncrement, Default } from 'sequelize-typescript';

@Table
export class ProductEnt extends Model<ProductEnt> {
    @PrimaryKey
    @AutoIncrement
    @Column
    productId: number;

    @Column
    categoryId: string;

    @Column
    currency: number;

    @Column
    discountRate: number;

    @Column
    name: string;

    @Column
    inventoryStatus: string;

    @Column
    originalPrice: number;

    @Column
    price: number;

    @Column
    thumbailUrl: string;

    @Column
    ratingScore: string;

    @Column
    reviews: number;

    @Column
    urlKey: string;
}
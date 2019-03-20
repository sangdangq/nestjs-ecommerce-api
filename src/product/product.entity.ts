import { Table, PrimaryKey, Column, Model, AutoIncrement, Default } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
    @PrimaryKey
    @AutoIncrement
    @Column
    ProductId: number;

    @Column
    CategoryId: number;

    @Column
    Currency: number;

    @Column
    DiscountRate: number;

    @Column
    Name: string;

    @Column
    InventoryStatus: string;

    @Column
    OriginalPrice: number;

    @Column
    Price: number;

    @Column
    ThumbailUrl: string;

    @Column
    RatingScore: string;

    @Column
    Reviews: number;

    @Column
    UrlKey: string;
}
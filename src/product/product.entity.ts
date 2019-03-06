import { Table, PrimaryKey, Column, Model, AutoIncrement, Default } from 'sequelize-typescript';

@Table
export class ProductEnt extends Model<ProductEnt> {
    @PrimaryKey
    @AutoIncrement
    @Column
    productId: number;

    @Column
    discount_rate: number;

    @Column
    name: string;

    @Column
    inventory_status: string;

    @Column
    original_price: number;

    @Column
    price: number;

    @Column
    thumbail_url: string;

    @Column
    url_key: string;
}
import { Table, Model, PrimaryKey, AutoIncrement, Column } from 'sequelize-typescript';

@Table
export class Category extends Model<Category>{
    @PrimaryKey
    @AutoIncrement
    @Column
    CategoryId: number;

    @Column
    Description: string;

}
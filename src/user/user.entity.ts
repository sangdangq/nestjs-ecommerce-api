import { Table, Column, IsUUID, Unique, AllowNull, BeforeCreate, Model, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { IsEmail, MaxLength } from 'class-validator';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  uid: string;

  @Column
  address1: string;

  @Column
  address2?: string;

  @Column
  agreement: boolean;

  @Column
  birthday: Date;

  @Column
  city: string;

  @Column
  company?: string;

  @Column
  confirm: string;

  @Column
  country: string;

  @Column
  email: string;

  @Column
  firstname: string;

  @Column
  gender: string;

  @Column
  lastname: string;

  @Column
  password: string;

  @Column
  confirmpassword: string;

  @Column
  phone: string;

  @Column
  postcode: string;

  @Column
  regionstate: string;
}

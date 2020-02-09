import {
  Table,
  Column,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';

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
  phone: string;

  @Column
  postcode: string;

  @Column
  regionstate: string;
}

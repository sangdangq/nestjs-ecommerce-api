import { Table, Column, IsUUID, Unique, AllowNull, BeforeCreate, Model, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model<User>{
  @PrimaryKey
  @Column
  CustomerId: string;

  @Column
  LastName: string;

  @Column
  FirstName: string;

  @Column
  Email: string;

  @Column
  Password: string;

  @Column
  PhoneNo: string;

  @Column
  Gender: string;

  @Column
  DateOfBirth: Date;
}

@Table
export class AccessToken extends Model<AccessToken> {
  @Column
  email: string;

  @Column
  key: string;
}

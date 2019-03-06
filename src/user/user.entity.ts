import { Table, Column, IsUUID, Unique, AllowNull, BeforeCreate, Model, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model<User>{
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Unique
  @Column
  email: string;

  @Column
  fullname: string;

  @Column
  password: string;
}

@Table
export class ResetPassword extends Model<ResetPassword>{
  @Column
  id: number;

  @Unique
  @PrimaryKey
  @Column
  email: string;

  @Column
  key: string;
}

@Table
export class AccessToken extends Model<AccessToken> {
  @Column
  email: string;

  @Column
  key: string;
}

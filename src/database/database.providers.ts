import { ProductEnt } from './../product/product.entity';
import { User } from './../user/user.entity';
import { Sequelize } from 'sequelize-typescript';
import { Category } from 'category/category.entity';

const localDb = {
  operatorsAliases: false,
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'api',
};

const herokuDb = {
  operatorsAliases: false,
  dialect: 'mysql',
  host: 'us-cdbr-iron-east-03.cleardb.net',
  port: 3306,
  username: 'b184f84a347e15',
  password: '004d043a',
  database: 'heroku_3a3ebe478dc35e1',
};

const HerokuDbIden = {
  operatorsAliases: false,
  dialect: 'mysql',
  host: 'us-cdbr-iron-east-03.cleardb.net',
  port: 3306,
  username: 'b19f6c1702f6ee',
  password: 'feb8b542',
  database: 'heroku_f12da9dd03095a3',
};

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize(HerokuDbIden);
      sequelize.addModels([
        ProductEnt,
        User,
        Category,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
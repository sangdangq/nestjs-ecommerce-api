import { Category } from './../category/category.entity';
import { Product } from './../product/product.entity';
import { User } from './../user/user.entity';
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const HerokuDbIden: any = {
        operatorsAliases: false,
        dialect: 'mysql',
        host: process.env.MYSQL_HOST,
        port: 3306,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
      };
      const sequelize = new Sequelize(HerokuDbIden);
      sequelize.addModels([Product, User, Category]);
      await sequelize.sync();
      return sequelize;
    }
  }
];

import { ProductEnt } from './../product/product.entity';
import { User } from './../user/user.entity';
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        operatorsAliases: false,
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'api',
      });
      sequelize.addModels([
        ProductEnt,
        User,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
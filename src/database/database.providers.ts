import { User, ResetPassword, AccessToken } from './../user/user.entity';
import { Sequelize } from 'sequelize-typescript';
import { ProductEnt } from 'product/product.entity';

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
        User,
        ResetPassword,
        AccessToken,
        ProductEnt,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
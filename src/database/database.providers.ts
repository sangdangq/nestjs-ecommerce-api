import { ProductEnt } from './../product/product.entity';
import { User } from './../user/user.entity';
import { Sequelize } from 'sequelize-typescript';

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

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        operatorsAliases: false,
        dialect: 'mysql',
        host: 'us-cdbr-iron-east-03.cleardb.net',
        port: 3306,
        username: 'b184f84a347e15',
        password: '004d043a',
        database: 'heroku_3a3ebe478dc35e1',
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
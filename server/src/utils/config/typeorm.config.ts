import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { EventEntity } from '../../modules/Event/infra/event.orm-entity';
import { TransactionEntity } from '../../modules/Transaction/infra/transaction.orm-entity';
import { CategoryEntity } from '../../modules/Category/infra/category.orm-entity';
import { AccountEntity } from '../../modules/Account/infra/account.orm-entity';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [EventEntity, TransactionEntity, CategoryEntity, AccountEntity],
  migrations: ['dist/core/database/migrations/*.js'],
  synchronize: false,
  migrationsRun: true,
};

export default typeOrmConfig;
export const AppDataSource = new DataSource(typeOrmConfig);

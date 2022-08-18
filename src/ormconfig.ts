import { DataSource, DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// Switch the migration file directory depending on the value of the TYPEORM_DIR_PREFIX environment variable.
const prefix = process.env.TYPEORM_DIR_PREFIX || 'src';

// These options are also used in 'app.module.ts'
export const CONNECTION_OPTIONS: PostgresConnectionOptions = {
  // TODO: Following options should load from environment variables.
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'test',
};

// These options are used only from TypeORM CLI.
const DATA_SOURCE_OPTIONS: DataSourceOptions = {
  ...CONNECTION_OPTIONS,
  entities: [`${prefix}/**/**.entity{.ts,.js}`],
  migrations: [`${prefix}/migrations/*{.ts,.js}`],
};

export default new DataSource(DATA_SOURCE_OPTIONS);

import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

// Load environment variables
config();

const configService = new ConfigService();

const configuration: DataSourceOptions = {
  type: 'mysql',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  entities: [
    'dist/**/*.entity{.ts,.js}'
  ],
  migrations: [
    'dist/src/migration/**/*.{js,ts}'
  ],
  synchronize: false,
  migrationsRun: true,
  // logging: true
};

export default configuration;

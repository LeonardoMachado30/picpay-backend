import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { WalletsModule } from './modules/wallets/wallets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'switchyard.proxy.rlwy.net:21907',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'picpay',
      autoLoadEntities: true,
      synchronize: true, // use false em produção
    }),
    UsersModule,
    TransactionsModule,
    WalletsModule,
  ],
})
export class AppModule {}

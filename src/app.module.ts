import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { WalletsModule } from './modules/wallets/wallets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'nozomi.proxy.rlwy.net',
      port: 47648,
      username: 'root',
      password: 'izNpFCwYFMzGFSKBtBpuaObRTJkGrwKq',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true, // use false em produção
    }),
    UsersModule,
    TransactionsModule,
    WalletsModule,
  ],
})
export class AppModule {}

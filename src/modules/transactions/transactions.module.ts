import { Module } from '@nestjs/common';
import { TransactionsService } from './services/transactions.service';
import { TransactionsController } from './controller/controller.controller';

@Module({
  providers: [TransactionsService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}

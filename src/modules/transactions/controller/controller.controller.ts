import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { TransactionsService } from '../services/transactions.service';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @ApiOperation({ summary: 'Realizar transferência entre usuários' })
  @ApiResponse({
    status: 201,
    description: 'Transferência realizada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro de validação ou saldo insuficiente',
  })
  async transfer(@Body() dto: CreateTransactionDto) {
    return this.transactionsService.transfer(dto);
  }
}

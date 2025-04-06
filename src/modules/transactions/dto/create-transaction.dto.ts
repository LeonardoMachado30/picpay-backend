import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsInt } from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({ example: 100.0, description: 'Valor da transferência' })
  @IsNumber()
  @IsPositive()
  value: number;

  @ApiProperty({
    example: 1,
    description: 'ID do usuário que está enviando dinheiro',
  })
  @IsInt()
  payer: number;

  @ApiProperty({
    example: 2,
    description: 'ID do usuário que está recebendo dinheiro',
  })
  @IsInt()
  payee: number;
}

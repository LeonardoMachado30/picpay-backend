import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';
import { CreateTransactionDto } from '../dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  async transfer(dto: CreateTransactionDto) {
    const { value, payer, payee } = dto;

    if (payer === payee) {
      throw new BadRequestException(
        'Pagador e recebedor devem ser diferentes.',
      );
    }

    // TODO: Buscar usuários, validar tipos, verificar saldo e realizar a lógica real

    // Consulta serviço de autorização externo
    const authResponse = await axios.get(
      'https://util.devi.tools/api/v2/authorize',
    );
    if (authResponse.data.message !== 'Autorizado') {
      throw new BadRequestException(
        'Transação não autorizada pelo serviço externo.',
      );
    }

    // Simula transação (a lógica real com banco de dados e rollback deve ser implementada)
    const success = true; // Suponha que a transação foi bem sucedida

    if (!success) {
      throw new BadRequestException('Erro ao realizar a transação.');
    }

    // Notificação ao recebedor (serviço pode estar instável)
    try {
      await axios.post('https://util.devi.tools/api/v1/notify', {
        userId: payee,
        message: 'Você recebeu uma transferência!',
      });
    } catch (error) {
      console.warn(
        'Falha ao notificar o usuário, mas a transferência foi concluída.',
      );
    }

    return {
      status: 'success',
      message: 'Transferência realizada com sucesso',
      data: dto,
    };
  }
}

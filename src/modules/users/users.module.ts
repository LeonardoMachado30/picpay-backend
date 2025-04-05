import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 👈 Aqui é o segredo
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // opcional, mas útil se quiser usar UsersService fora
})
export class UsersModule {}

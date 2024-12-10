import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],  // Importa PrismaModule aquí
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}

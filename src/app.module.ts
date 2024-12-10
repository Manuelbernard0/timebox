import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { ActivityModule } from './activity/activity.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [PrismaModule, UserModule, StudentModule, ActivityModule, TaskModule],  // Importa PrismaModule aquí
})
export class AppModule {}

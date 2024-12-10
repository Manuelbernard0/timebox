import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService){

  }
  // private data=[
  //   {
  //     "title":"Proyecto final de AOaS",
  //     "date":"2024-11-27",
  //     "priority":true,
  //     "status":1
  //   },
  //   {
  //     "title":"Tarea de FOSO",
  //     "date":"2024-11-27",
  //     "priority":true,
  //     "status":1
  //   },
  //   {
  //     "title":"Proyecto final de IOT",
  //     "date":"2024-11-27",
  //     "priority":true,
  //     "status":1
  //   }
  // ]


  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data:createTaskDto
    })
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where:{id}
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return 'This action updates a #${id} task';
  }

  remove(id: number) {
    return 'This action removes a #${id} task';
  }
}
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICourseRepository } from '../interfaces/course-repository.interface';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CourseEntity } from '../entities/course.entity';

@Injectable()
export class PrismaCourseRepository implements ICourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(course: CourseEntity) {
    return this.prisma.course.create({
      data: {
        title: course.title,
        description: course.description,
        price: course.price,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return this.prisma.course.findMany();
  }

  async update(id: string, data: Partial<UpdateCourseDto>) {
    return this.prisma.course.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}

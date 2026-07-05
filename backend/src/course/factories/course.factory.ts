import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from '../dto/create-course.dto';
import { CourseEntity } from '../entities/course.entity';

@Injectable()
export class CourseFactory {
  create(dto: CreateCourseDto): CourseEntity {
    return new CourseEntity(dto.title, dto.description ?? null, dto.price);
  }
}

import { Course } from '@prisma/client';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CourseEntity } from '../entities/course.entity';

export interface ICourseRepository {
  create(course: CourseEntity): Promise<Course>;

  findById(id: string): Promise<Course | null>;

  findAll(): Promise<Course[]>;

  update(id: string, data: Partial<UpdateCourseDto>): Promise<Course>;

  delete(id: string): void;
}

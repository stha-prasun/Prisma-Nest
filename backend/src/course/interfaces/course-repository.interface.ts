import { Course } from '@prisma/client';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';

export interface ICourseRepository {
  create(data: CreateCourseDto): Promise<Course>;

  findById(id: string): Promise<Course | null>;

  findAll(): Promise<Course[]>;

  update(id: string, data: Partial<UpdateCourseDto>): Promise<Course>;

  delete(id: string): Promise<Course>;
}
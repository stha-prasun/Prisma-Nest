import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { COURSE_REPOSITORY } from './constants/course.constants';
import type { ICourseRepository } from './interfaces/course-repository.interface';
import { CourseFactory } from './factories/course.factory';

@Injectable()
export class CourseService {
  constructor(
    @Inject(COURSE_REPOSITORY)
    private readonly repository: ICourseRepository,

    private readonly factory: CourseFactory,
  ) {}

  async create(dto: CreateCourseDto) {
    const course = this.factory.create(dto);

    return this.repository.create(course);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    const course = await this.repository.findById(id);
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return course;
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return await this.repository.update(id, updateCourseDto);
  }

  async remove(id: string) {
    return await this.repository.delete(id);
  }
}

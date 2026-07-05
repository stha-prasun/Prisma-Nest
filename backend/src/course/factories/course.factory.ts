import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from '../dto/create-course.dto';
import { CourseEntity } from '../entities/course.entity';

@Injectable()
export class CourseFactory {
  create(dto: CreateCourseDto): CourseEntity {
    const slug = this.generateSlug(dto.title);

    return new CourseEntity(
      dto.title,
      dto.description ?? null,
      dto.price,
      slug,
    );
  }

  private generateSlug(title: string): string {
    return title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-');
  }
}
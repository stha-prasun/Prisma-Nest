import { Module } from '@nestjs/common';
import { PrismaCourseRepository } from './repositories/prisma-course.repository';
import { COURSE_REPOSITORY } from './constants/course.constants';
import { CourseService } from './course.service';

@Module({
  providers: [
    CourseService,

    {
      provide: COURSE_REPOSITORY,
      useClass: PrismaCourseRepository,
    },
  ],
  exports: [CourseService],
})
export class CourseModule {}
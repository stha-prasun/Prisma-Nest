export class CourseEntity {
  constructor(
    public readonly title: string,
    public readonly description: string | null,
    public readonly price: number,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
  ) {}
}

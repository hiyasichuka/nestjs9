import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

// Define a custom repository.
@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findAll(): Promise<User[]> {
    return this.find();
  }

  async getUser(id: string): Promise<User | null> {
    return await this.createQueryBuilder('target')
      .where('target.id = :id', { id })
      .getOne();
  }
}

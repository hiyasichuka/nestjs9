// // Inject default repository
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from './users.entity';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private usersRepository: Repository<User>,
//   ) {}

//   async findAll(): Promise<User[]> {
//     return this.usersRepository.find();
//   }

//   async getUser(id: string): Promise<User | null> {
//     return this.usersRepository.findOneBy({ id });
//   }
// }

// Inject custom repository
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async getUser(id: string): Promise<User | null> {
    return this.usersRepository.getUser(id);
  }
}

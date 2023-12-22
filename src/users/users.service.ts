import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor (private readonly UserRepository : UserRepository) {

  }
  create(createUserDto : CreateUserDto) {
    return this.UserRepository.create(createUserDto);
  }

  findAll() {
    return this.UserRepository.findAll();
  }

  findOne(id: number) {
    return this.UserRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.UserRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.UserRepository.remove(id);
  }
}

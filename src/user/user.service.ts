import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (user)
      throw new BadRequestException(
        `Такой пользователь ${createUserDto.email} уже существует!`,
      );

    const newUser = {
      email: createUserDto.email,
      password: createUserDto.password,
      role: createUserDto.role,
    };
    if (!newUser) throw new BadRequestException(`Введите все атрибуты`);
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    const user = await this.userRepository.find();
    if (!user) throw new NotFoundException('Пользователей нет!');
    return user;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!user) throw new NotFoundException(`Пользователь с ${id} не найден!`);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!user) throw new NotFoundException(`Такого пользователя с ${id} нет!`);
    return await this.userRepository.remove(user);
  }
}

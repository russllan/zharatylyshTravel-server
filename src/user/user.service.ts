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
// import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    // private readonly mailService: MailerService,
  ) {}

  // async sendEmail() {
  //   this.mailService.sendMail({
  //     from: 'rahmatov.ruslan02@example.com',
  //     to: 'rahmatov.ruslan.02@example.com',
  //     subject: 'subject',
  //     text: 'text',
  //     html: '<b>welcome html</b>',
  //   });
  // }

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

  async auth(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
        password: createUserDto.password,
      },
    });
    if (!user) throw new BadRequestException('Вы не зарегистрированы!');
    return `Вы успешно авторизовались ${user}`;
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

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: {id: id}
    })
    if(!user) throw new NotFoundException('Такого пользователя нет!')
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!user) throw new NotFoundException(`Такого пользователя с ${id} нет!`);
    return await this.userRepository.delete(id);
  }
}

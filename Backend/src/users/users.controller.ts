import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
      return this.usersService.getUsers();
  }

  @Post("/login")
  async Login(@Body() createUserDto: CreateUserDto) {
    return this.usersService.Login(createUserDto.email, createUserDto.password).catch(err => {
      throw new HttpException({
        message: err.message
      }, HttpStatus.BAD_REQUEST);
    })
 }

  @Post("/signup")
   async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
      return this.usersService.signUp(createUserDto.email, createUserDto.password)
  }
 
 @Post('/delete')
   async deleteUser(@Body() createUserDto: CreateUserDto): Promise<User> {
       return this.usersService.removeById(createUserDto.email, createUserDto.password)
   }

  //  @Delete(':userId')
  //  remove(@Param('userId') userId:string){
  //    return this.usersService.removeById(userId);
  //  }

  @Patch(':userId')
  async updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
      return this.usersService.updateUser(userId, updateUserDto);
  }
}
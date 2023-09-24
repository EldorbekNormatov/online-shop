import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { SellerDto } from './dto/seller--user.dot';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('Auth') private readonly userDb: Model<any>,
    @InjectModel('SellerAuth') private readonly sellerDb: Model<any> 
     ) {}

 async create({name, surname, password, number, email, gender}: CreateUserDto) {
     const user =  await this.userDb.create({name, surname, password, number, email, gender})

      return { message: 'Succes', user }
  }
 async createSeller({name, surname, password, number, email, legalName}: SellerDto) {
     const user =  await this.sellerDb.create({name, surname, password, number, email, legalName})

      return { message: 'Succes', user }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne() {
    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findByNumber(number: string) {
    const user = await this.userDb.findOne({number})

    return user
  }

  async  findByEmail(email: string) {
    const user = await this.userDb.findOne({email: email})
    return user
  }

  async  sellerfindByEmail(email: string) {
    const user = await this.sellerDb.findOne({email: email})
    return user
  }

  async findByLeagalName(legalName) {
    const user = await this.sellerDb.findOne({legalName})
    return user 
    
  }
  
}

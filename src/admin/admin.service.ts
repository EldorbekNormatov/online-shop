import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { addAdminDto } from './dto/add-admin.dto';

@Injectable()
export class AdminService {
  
  constructor(
    @InjectModel('Auth') private readonly userDb: Model<any>,
    @InjectModel('SellerAuth') private readonly sellerDb: Model<any>,
    @InjectModel('Admin') private readonly adminDb: Model<any>,
     ) {}

     async create({login, password, }: addAdminDto){
      const founLogin = await this.adminDb.findOne({login: login})
      if(founLogin) throw new ForbiddenException('this login already token')
      const newAdmin = await this.adminDb.create({login, password})
  
      return {newAdmin}
     }
     async login({login, password, }: addAdminDto){
      const founLogin = await this.adminDb.findOne({login: login})
      if(!founLogin) throw new ForbiddenException('login or password not found')

      const founPassword = await this.adminDb.findOne({password: password})
      if(!founPassword) throw new ForbiddenException('login or password not found')
  
      return {message: 'success'}
     }

 async  findAllUser() {
    const data = await this.userDb.find()
    return {data};
  }

 async findAllSeller() {
    const data = await this.sellerDb.find()
    return {data};
  }

 async  findOneUser(id: string) {
  const data = await this.userDb.findById(id)
    return {data}
  }

 async  findOneSeller(id: string) {
  const data = await this.sellerDb.findById(id)
  return {data}
  }

 async  removeUser(id: string) {
    await this.userDb.findByIdAndDelete(id)

    return {message: 'deleted'}
  }
  async removeSeller(id: string) {
    await this.sellerDb.findByIdAndDelete(id)

    return {message: 'deleted'} 
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FilterService {
  constructor(
    @InjectModel('Product') private readonly productDb: Model<any>,
    @InjectModel('Category') private readonly categoryDb: Model<any>, 
    ) {}

  
  async findAll(id: string) {
    const products = await this.productDb.find({name: id})
    return {products}
  }

 async findOne(id: string) {
    const products = await this.categoryDb.find({categoryName:id}).populate('productID')
    return {products}
  }

}

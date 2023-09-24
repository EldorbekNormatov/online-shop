import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateLikedDto } from './dto/create-liked.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LikedService {
  
  constructor(
    @InjectModel('Liked') private readonly likedDb: Model<any>,
    @InjectModel('Product') private readonly productDb: Model<any>,

    ) {}
  async create({ id }: CreateLikedDto) {
    const foundProduct = await this.likedDb.findOne({product: id})
   
   if(foundProduct) throw new ForbiddenException('this product already added to basket')
 
    const product =  await this.likedDb.create({product: id})
    return {product}
  }

   async findAll() {
    const data = await this.likedDb.find().populate('product');
    return {data}
  }

  async findOne(id: string) {
    const data = await this.likedDb.findOne({product: id}).populate('product');
    return {data};
  }

 
  async remove(id: string) {
    await this.likedDb.findByIdAndDelete(id)
    return {message: 'success'};
  }
}

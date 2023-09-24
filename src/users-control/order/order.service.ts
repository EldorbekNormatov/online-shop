import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  
  constructor(
    @InjectModel('Order') private readonly orderDb: Model<any>,
    @InjectModel('Product') private readonly productDb: Model<any>,
    ) {}
  async create({productId, region, home }: CreateOrderDto) {    
    const foundProduct = await this.orderDb.findOne({order: productId})
    if(foundProduct) throw new ForbiddenException(' you are ordering this item second time! are you sure?')
    
   const newOrder = await this.orderDb.create({order: productId, region, home})
  
    return { newOrder }
  }

  async findAll() {
    const data = await this.orderDb.find().populate('order');
    return {data}
  }
}

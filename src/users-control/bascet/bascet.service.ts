import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateBascetDto } from './dto/create-bascet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BascetService {

  constructor(
    @InjectModel('Basket') private readonly basketDb: Model<any>,
    @InjectModel('Product') private readonly productDb: Model<any>,
    @InjectModel('Count') private readonly countDb: Model<any>,

    ) {}

 async create({id}: CreateBascetDto) {
 
   let productPrise = 0
   let productAmount = 0

    const foundProduct = await this.basketDb.findOne({product: id})
    if(foundProduct) throw new ForbiddenException('this product already added to basket')

    const product = await this.productDb.findById(id)
    if(!product) throw new ForbiddenException('this product is not found')

    const countFound = await this.countDb.find()
    productPrise += product.price * 1
    productPrise += countFound[0].totalPrise * 1
    console.log(productPrise);
    
    productPrise -= product.discount * 1 
    productAmount += 1
    console.log(productPrise);
    
    const countId = countFound[0].id
    
    await this.countDb.findByIdAndUpdate(countId, {
      $set: {
        totalPrise: productPrise,
        productAmount: productAmount
      }
    })
  
   const newProduct =  await this.basketDb.create({product: id})    
     return {newProduct};    
  
  }

  async findAll() {
    const data = await this.basketDb.find().populate('product');
    return {data}
  }

  async findOne(id: string) {
    const data = await this.basketDb.findOne({product: id}).populate('product');
    return {data};
  }

 async remove(id: string) {
  
  let newProductPrise = 0
  let newProductAmount = 0

  const product  = await this.basketDb.findById(id).populate('product')
  
  if(!product) throw new ForbiddenException('this product is not found')
  
  const countFound = await this.countDb.find()
  
  newProductPrise += countFound[0].totalPrise 
  newProductPrise -= product.product.price * 1
  
  newProductAmount = countFound[0].productAmount * 1
  newProductAmount -= 1
  
  const countId = countFound[0].id
   
  await this.countDb.findByIdAndUpdate(countId, {
    $set: {
      totalPrise: newProductPrise,
      productAmount: newProductAmount
    }
  })

  await this.basketDb.findByIdAndDelete(id)
    return {message: 'success'};
  }
}

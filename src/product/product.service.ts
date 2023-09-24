import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
    constructor(
       @InjectModel('Product') private readonly productDb: Model<any>,
       @InjectModel('SellerAuth') private readonly sellerDb: Model<any>, 
       @InjectModel('Category') private readonly categoryDb: Model<any>, 
       ) {}


  async create({name, category, image, price, descount, description, }: CreateProductDto, id: string) {
    
    const product = await this.productDb.create({name,  image, price, descount, description, sellerId: id})
    
    await this.categoryDb.create({categoryName: category, productID: product.id})

     return {product }
  }

  async findAll() {
    const prods = await this.productDb.find()
    return { prods }
  }

 async  findOne(id: string) {
  const prod = await  this.productDb.findById(id)

  if(!prod) throw new ForbiddenException('this product is not found')

    return {prod}
  }

async  update(id: string, {name, category, image, price, descount, description}: UpdateProductDto) {

  const prod = await  this.productDb.findById(id)

  if(!prod) throw new ForbiddenException('this product is not found')

  const newProduct = await this.productDb.findByIdAndUpdate(id, {
      $set: {
        name: name,
        categoryId: category,
        image: image,
        price: price,
        descount: descount,
        description: description,
   }
    })
    return { newProduct }
  }

 async remove(id: string) {
    await this.productDb.findByIdAndDelete(id)
    return {message: 'successfully deleted'}
  }

  
}

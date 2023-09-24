import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchem } from 'src/shared/product.module';
import { SellerSchema } from 'src/shared/seller.module';
import { CategorySchema } from 'src/shared/category.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchem }]), 
    MongooseModule.forFeature([{ name: 'SellerAuth', schema: SellerSchema }]), 
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]), 
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

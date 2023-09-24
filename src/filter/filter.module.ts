import { Module } from '@nestjs/common';
import { FilterService } from './filter.service';
import { FilterController } from './filter.controller';
import { CategorySchema } from 'src/shared/category.model';
import { ProductSchem } from 'src/shared/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchem }]), 
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]), 
  ],
  controllers: [FilterController],
  providers: [FilterService],
})
export class FilterModule {}

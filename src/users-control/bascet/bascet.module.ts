import { Module } from '@nestjs/common';
import { BascetService } from './bascet.service';
import { BascetController } from './bascet.controller';
import { BasketSchema } from 'src/shared/basket.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchem } from 'src/shared/product.module';
import { CountSchema } from 'src/shared/count.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Basket', schema: BasketSchema }]), 
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchem }]), 
    MongooseModule.forFeature([{ name: 'Count', schema: CountSchema }]), 

  ],
  controllers: [BascetController],
  providers: [BascetService],
})
export class BascetModule {}

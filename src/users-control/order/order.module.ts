import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderSchema } from 'src/shared/oreder.model';
import { MongooseModule } from '@nestjs/mongoose';
import { BasketSchema } from 'src/shared/basket.model';
import { ProductSchem } from 'src/shared/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]), 
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchem }]), 

  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}

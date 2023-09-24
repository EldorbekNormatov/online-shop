import { Module } from '@nestjs/common';
import { LikedService } from './liked.service';
import { LikedController } from './liked.controller';
import { LikedSchema } from 'src/shared/liked.model';
import { ProductSchem } from 'src/shared/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Liked', schema: LikedSchema }]), 
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchem }]), 
  ],
  controllers: [LikedController],
  providers: [LikedService],
})
export class LikedModule {}

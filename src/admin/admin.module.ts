import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from 'src/shared/auth.module';
import { SellerSchema } from 'src/shared/seller.module';
import { AdminSchema } from 'src/shared/admin.moel';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Auth', schema:AuthSchema }]),
    MongooseModule.forFeature([{ name: 'SellerAuth', schema: SellerSchema }]), 
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]), 
   ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthSchema } from 'src/shared/auth.module';
import { SellerSchema } from 'src/shared/seller.module';


@Module({
  imports: [
     MongooseModule.forFeature([{ name: 'Auth', schema:AuthSchema }]),
     MongooseModule.forFeature([{ name: 'SellerAuth', schema: SellerSchema }]), 
    ],

  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

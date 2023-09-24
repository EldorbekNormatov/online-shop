import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MailModule } from './mail/mail.module';
import { ProductModule } from './product/product.module';
import { SellerModule } from './seller/seller.module';
import { FileModule } from './file/file.module';
// import { BascetModule } from './users-control/bascet/bascet.module';
import { MoneyTransferModule } from './users-control/money-transfer/money-transfer.module';
import { LikedModule } from './users-control/liked/liked.module';
import { OrderModule } from './users-control/order/order.module';
// import { BascektModule } from './bascekt/bascekt.module';
import { BascetModule } from './users-control/bascet/bascet.module';
import { FilterModule } from './filter/filter.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    AuthModule,
     SharedModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/SelloUz'),
    UsersModule,
    MailModule,
    ProductModule,
    SellerModule,
    FileModule,
    BascetModule,
    // UsersControlModule,
    // BascektModule,
    // File1Module,
    OrderModule,
    LikedModule,
    MoneyTransferModule,
    FilterModule,
    AdminModule,

    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

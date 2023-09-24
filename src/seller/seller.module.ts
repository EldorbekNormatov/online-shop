import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { UsersModule } from 'src/users/users.module';
import { MailModule } from 'src/mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import { CacheModule } from '@nestjs/cache-manager';



@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 's@cr@t', 
      signOptions: {expiresIn :"24h"},
      global: true,
     }),
    CacheModule.register({ ttl: 2160000 }) ,
     MailModule,
  ],
  controllers: [SellerController],
  providers: [SellerService],
})
export class SellerModule {}

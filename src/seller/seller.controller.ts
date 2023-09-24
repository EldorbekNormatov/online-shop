import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SellerService } from './seller.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { verifyDto } from './dto/verify-seller.dto';
import {ApiTags} from '@nestjs/swagger'
import { AuthGuard } from 'src/shared/guards/auth.guard';


@ApiTags('sellers')
@UseGuards(AuthGuard)

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Post('register')
  register(@Body() createSellerDto: CreateSellerDto) {
    return this.sellerService.register(createSellerDto);
  }

  
  @Post('verify')
  verify(@Body() body: verifyDto) {
    return this.sellerService.verify(body);
  }

  @Post('login')
  login(@Body() Body: CreateSellerDto) {
    return this.sellerService.login(Body);
  }

  
}

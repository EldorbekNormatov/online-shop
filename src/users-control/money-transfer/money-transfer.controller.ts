import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoneyTransferService } from './money-transfer.service';
import { CreateMoneyTransferDto } from './dto/create-money-transfer.dto';


@Controller('money-transfer')
export class MoneyTransferController {
  constructor(private readonly moneyTransferService: MoneyTransferService) {}

  @Post()
  create(@Body() createMoneyTransferDto: CreateMoneyTransferDto) {
    return this.moneyTransferService.create(createMoneyTransferDto);
  }

  
}

import { Injectable } from '@nestjs/common';
import { CreateMoneyTransferDto } from './dto/create-money-transfer.dto';
import stripe from 'stripe'


@Injectable()
export class MoneyTransferService {
  create(createMoneyTransferDto: CreateMoneyTransferDto) {
   
  }

}

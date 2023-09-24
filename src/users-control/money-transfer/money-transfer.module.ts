import { Module } from '@nestjs/common';
import { MoneyTransferService } from './money-transfer.service';
import { MoneyTransferController } from './money-transfer.controller';

@Module({
  controllers: [MoneyTransferController],
  providers: [MoneyTransferService],
})
export class MoneyTransferModule {}

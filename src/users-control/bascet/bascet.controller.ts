import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BascetService } from './bascet.service';
import { CreateBascetDto } from './dto/create-bascet.dto';
import {ApiTags} from '@nestjs/swagger'
import { AuthGuard } from 'src/shared/guards/auth.guard';

@ApiTags('basket')

@UseGuards(AuthGuard)

@Controller('bascet')
export class BascetController {
  constructor(private readonly bascetService: BascetService) {}

  @Post()
  create(@Body() createBascetDto: CreateBascetDto) {
    return this.bascetService.create(createBascetDto);
  }

  @Get()
  findAll() {
    return this.bascetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bascetService.findOne(id);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bascetService.remove(id);
  }
}

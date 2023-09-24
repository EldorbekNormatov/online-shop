import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FilterService } from './filter.service';
import {ApiTags} from '@nestjs/swagger'
import { AuthGuard } from 'src/shared/guards/auth.guard';


@ApiTags('filter')
@UseGuards(AuthGuard)

@Controller('filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  @Get('name/:id')
  findAll(@Param('id') id: string) {
    return this.filterService.findAll(id);
  }

  @Get('category/:id')
  findOne(@Param('id') id: string) {
    return this.filterService.findOne(id);
  }

  
}

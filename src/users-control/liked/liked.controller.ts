import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LikedService } from './liked.service';
import { CreateLikedDto } from './dto/create-liked.dto';
import {ApiTags} from '@nestjs/swagger'
import { AuthGuard } from 'src/shared/guards/auth.guard';


@ApiTags('liked')
@UseGuards(AuthGuard)

@Controller('liked')
export class LikedController {
  constructor(private readonly likedService: LikedService) {}

  @Post()
  create(@Body() createLikedDto: CreateLikedDto) {
    return this.likedService.create(createLikedDto);
  }

  @Get()
  findAll() {
    return this.likedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likedService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likedService.remove(id);
  }
}

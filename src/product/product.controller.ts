import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {ApiTags,  ApiOperation} from '@nestjs/swagger'
import { AuthGuard } from 'src/shared/guards/auth.guard';


@ApiTags('products')
@UseGuards(AuthGuard)

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({summary: 'id from params is sellers id to populate seller and product'})
  @Post(':id')
  create(@Body() createProductDto: CreateProductDto, @Param('id') id: string) {
    return this.productService.create(createProductDto, id);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}

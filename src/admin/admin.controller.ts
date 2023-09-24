import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { addAdminDto } from './dto/add-admin.dto';
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';
import { CreateSellerDto } from 'src/seller/dto/create-seller.dto';
import { AuthGuard } from 'src/shared/guards/auth.guard';


@ApiTags('Admin')
@UseGuards(AuthGuard)

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post("add")
  create(@Body() addAdminDto: addAdminDto) {
    return this.adminService.create(addAdminDto);
  }

  @Post("login")
  login(@Body() addAdminDto: addAdminDto) {
    return this.adminService.login(addAdminDto);
  }

  @ApiOperation({ summary: 'returns all users'})
  @Get('getUsers')
  findAllUser() {
    return this.adminService.findAllUser();
  }

  @ApiOperation({ summary: 'returns all seller'})

  @Get('getSeller')
  findAllSeller() {
    return this.adminService.findAllSeller();
  }

  @ApiOperation({ summary: 'returns one a user by id'})
  @Get('getUser/:id')
  findOneUser(@Param('id') id: string) {
    return this.adminService.findOneUser(id);
  }

  @ApiOperation({ summary: 'returns one a seller by id'})
  @Get('getSeller/:id')
  findOneSeller(@Param('id') id: string) {
    return this.adminService.findOneSeller(id);
  }

  @Delete('deletUser/:id')
  removeUser(@Param('id') id: string) {
    return this.adminService.removeUser(id);
  }

  @Delete('deleteSeller/:id')
  removeSeller(@Param('id') id: string) {
    return this.adminService.removeSeller(id);
  }

}

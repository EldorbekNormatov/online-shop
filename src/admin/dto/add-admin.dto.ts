import { IsNotEmpty, IsString } from "class-validator";
import {ApiProperty} from '@nestjs/swagger'

export class addAdminDto {
    @ApiProperty({description: "login  for admin", type: 'string', example: "admin"})

    @IsString()
    @IsNotEmpty()
    login: string;

    @ApiProperty({description: "passoword  for admin", type: 'string', example: "admin"})

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    isMain: string;
}

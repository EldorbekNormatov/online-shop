import { IsString, IsNotEmpty, IsNumber } from "class-validator"
import {ApiProperty} from '@nestjs/swagger'

export class loginDto {
    @ApiProperty({description: "email for login", type: 'string'})

    @IsString()
    @IsNotEmpty()
    email: string

    @ApiProperty({description: "password for login", type: 'string'})

    @IsString()
    @IsNotEmpty()
    password: string
}

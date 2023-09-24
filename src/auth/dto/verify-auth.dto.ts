import { IsString, IsNotEmpty,  } from "class-validator"
import {ApiProperty} from '@nestjs/swagger'


export class verifyDto {

    // @ApiProperty({description: "email for verify", type: 'string'})
    @ApiProperty({description: "email for login", type: 'string'})

    @IsString()
    @IsNotEmpty()
    email: string

    @ApiProperty({description: "otp for verify", type: 'string'})
    @IsString()
    @IsNotEmpty()
    otp: string
}
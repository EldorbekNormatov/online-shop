import { IsString, IsNotEmpty,  } from "class-validator"
import {ApiProperty} from '@nestjs/swagger'

export class CreateAuthDto {
    @ApiProperty({description: "name for register", type: 'string'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({description: "surname for register", type: 'string'})
    @IsString()
    @IsNotEmpty()
    surname: string;

    @ApiProperty({description: "password for register", type: 'string'})
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({description: "number for register", type: 'string'})
    @IsString()
    @IsNotEmpty()
    number: string;

    @ApiProperty({description: "email for register", type: 'string'})
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({description: "gender for register", type: 'string'})
    @IsString()
    @IsNotEmpty()
    gender: string;
}

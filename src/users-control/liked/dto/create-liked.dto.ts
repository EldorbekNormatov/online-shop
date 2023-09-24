import { IsNotEmpty, IsString } from "class-validator";
import {ApiProperty} from '@nestjs/swagger'


export class CreateLikedDto {
    @ApiProperty({description: " product id for add liked", type: 'string'})

    @IsString()
    @IsNotEmpty()
    id: string;
}

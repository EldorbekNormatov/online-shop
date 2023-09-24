import { IsNotEmpty, IsString } from "class-validator";
import {ApiProperty} from '@nestjs/swagger'


export class CreateBascetDto {
    @ApiProperty({description: "product id for add basket", type: 'string'})
    @IsString()
    @IsNotEmpty()
    id: string;
}

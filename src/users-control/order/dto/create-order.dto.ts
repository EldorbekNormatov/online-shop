import { IsNotEmpty, IsString } from "class-validator";
import {ApiProperty} from '@nestjs/swagger'

export class CreateOrderDto {
    @ApiProperty({description: "product id for order", type: 'string'})

    @IsString()
    @IsNotEmpty()
    productId: string;

    @ApiProperty({description: "region id for order", type: 'string'})

    @IsString()
    @IsNotEmpty()
    region: string;

    @ApiProperty({description: "home id for order", type: 'string'})

    @IsString()
    @IsNotEmpty()
    home: string;
}

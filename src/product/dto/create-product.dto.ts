import { IsNotEmpty, IsString } from "class-validator";
import {ApiProperty} from '@nestjs/swagger'

export class CreateProductDto {
    @ApiProperty({description: "name for add product", type: 'string'})

    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({description: "catrgor for add product", type: 'string'})

    @IsString()
    @IsNotEmpty()
    category: string;

    @ApiProperty({description: "image name for add product", type: 'string'})

    @IsString()
    @IsNotEmpty()
    image: string;

    @ApiProperty({description: "price for add product", type: 'string'})

    @IsString()
    @IsNotEmpty()
    price: string

    @ApiProperty({description: "descount for add product", type: 'string'})

    @IsString()
    @IsNotEmpty()
    descount: string;

    @ApiProperty({description: "description for add product", type: 'string'})

    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({description: "seller for populat seller to product", type: 'string'})
    @IsString()
    @IsNotEmpty()
    sellerId: string;
}

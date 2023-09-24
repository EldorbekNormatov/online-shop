import { IsNotEmpty, IsString } from "class-validator";
import {ApiProperty } from '@nestjs/swagger'
// import file from  'express'

export class addFileDto {
    @ApiProperty({description: "file upload", type: 'string'})

    @IsString()
    @IsNotEmpty()
    file: string;

    @ApiProperty({ type: 'string', format: 'binary', required: true })
    fil: Express.Multer.File
}
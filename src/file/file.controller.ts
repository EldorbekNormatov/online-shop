import { Controller, Post,  UploadedFile,  UseGuards,  UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 } from 'uuid';
import {ApiTags, ApiQuery, ApiConsumes, ApiOperation} from '@nestjs/swagger'
import { addFileDto } from './dto/add-file.dto';
import { AuthGuard } from 'src/shared/guards/auth.guard';


@ApiTags('get File')
@UseGuards(AuthGuard)

@Controller('file')
export class FileController {
  constructor() {}
  
  @ApiQuery({type: addFileDto})
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'it gets file end returns file name  to front-end'})

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = v4();
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  create(@UploadedFile() file: Express.Multer.File) {
    return { data: file.filename, message: 'Success' };
  }
}

  

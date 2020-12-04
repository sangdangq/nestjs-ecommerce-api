import {
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
} from '@nestjs/common';
import { Controller, Post, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('uploads')
export class UploadController {
  constructor() {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file, @Res() res) {
    res.status(HttpStatus.OK).send({
      name: file.filename,
      url: 'https://nestapisd.herokuapp.com/uploads/' + file.filename,
      type: file.mimetype
    });
  }

  @Get(':imgPath')
  image(@Param('imgPath') filePath: any, @Res() res) {
    return res.sendFile(filePath, { root: 'uploads' });
  }
}

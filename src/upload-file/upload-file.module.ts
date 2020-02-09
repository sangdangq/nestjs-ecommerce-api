import { Module, HttpModule, MulterModule } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UploadController } from './upload-file.controller';
import { UploadFileService } from './upload-file.service';

@Module({
  imports: [
    DatabaseModule,
    HttpModule,
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: 'uploads',
      })
    })
  ],
  controllers: [UploadController],
  providers: [UploadFileService],
  exports: [UploadFileService]
})
export class UploadFileModule {}

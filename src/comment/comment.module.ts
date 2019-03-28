import { CommentService } from './comment.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { SharedModule } from './../shared/shared.module';
import { CommentController } from './comment.controller';

@Module({
  controllers: [CommentController],
  imports: [
    DatabaseModule,
    SharedModule,
  ],
  providers: [
    CommentService,
  ],
})
export class CommentModule {}

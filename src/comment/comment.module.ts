import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './../database/database.module';
import { SharedModule } from './../shared/shared.module';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Comment } from './comment.model';

@Module({
  controllers: [CommentController],
  imports: [
    DatabaseModule,
    SharedModule,
    MongooseModule.forFeature([{ name: Comment.modelName, schema: Comment.model.schema }]),
  ],
  providers: [
    CommentService,
  ],
})
export class CommentModule {}

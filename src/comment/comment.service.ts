import { ModelType } from 'typegoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from '../comment/comment.model';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.modelName) private readonly commentModel: ModelType<Comment>,
    ) {}

    async getComment(commentId: number) {
        return await this.commentModel.findOne({id: commentId});
    }

    async create(commentDto: Comment) {
        const comment = new this.commentModel(commentDto);
        return comment.save();
    }
}

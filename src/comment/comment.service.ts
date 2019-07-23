import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { Comment } from '../comment/comment.model';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.modelName) private readonly commentModel: ModelType<Comment>,
    ) {}

    async getCommentByProductId(id: string) {
        return await this.commentModel.find({productId: id});
    }

    async getCommentByCustomerId(id: string) {
        return await this.commentModel.find({customerId: id});
    }

    async create(commentDto: Comment) {
        const comment = new this.commentModel(commentDto);
        return comment.save();
    }

    async update(commentDto: Comment) {
        const comment = new this.commentModel();
        return comment.updateOne(
            {_id: commentDto.id},
            {
                description: commentDto.description,
            },
        );
    }

    async delete(commentId: string) {
        return this.commentModel.deleteOne({_id: commentId});
    }
}

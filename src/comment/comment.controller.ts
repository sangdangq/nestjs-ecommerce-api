import { Controller, Post, Body, Res, HttpStatus, Get, Param, Put, Delete } from '@nestjs/common';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {
    }

    @Get('product/:id')
    async getCommentByProductId(@Param('id') productId: number, @Res() res) {
        const result = await this.commentService.getCommentByProductId(productId);
        if (result) {
            res.status(HttpStatus.OK).send(result);
        }
        res.status(HttpStatus.BAD_REQUEST).end('Failed to get comment for product');
    }

    @Get('customer/:id')
    async getCommentByCustomerId(@Param('id') customerId: number, @Res() res) {
        const result = await this.commentService.getCommentByCustomerId(customerId);
        if (result) {
            res.status(HttpStatus.OK).send(result);
        }
        res.status(HttpStatus.BAD_REQUEST).end('Failed to get comment for customer');
    }

    @Post()
    async create(@Body() body: Comment, @Res() res) {
        const result = await this.commentService.create(body);
        if (result) {
            res.status(HttpStatus.OK).end('Create successfully');
        }
        res.status(HttpStatus.BAD_REQUEST).end('Failed to create comment');
    }

    @Put()
    async update(@Body() comment: Comment, @Res() res) {
        const result = await this.commentService.update(comment);
        if (result && result.n > 0) {
            res.status(HttpStatus.OK).send('Update successfully');
        }
        res.status(HttpStatus.BAD_REQUEST).end('Failed to update comment');
    }

    @Delete(':id')
    async delete(@Param('id') commentId: string, @Res() res) {
        const result = await this.commentService.delete(commentId);
        if (result && result.n > 0) {
            res.status(HttpStatus.OK).send('Delete successfully');
        }
        res.status(HttpStatus.BAD_REQUEST).end('Failed to delete comment');
    }
}

import { CommentService } from './comment.service';
import { Controller, Post, Body, Res, HttpStatus, Get, Param } from '@nestjs/common';
import { Comment } from './comment.model'; 

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){
    }

    @Post()
    async create(@Body() body: Comment, @Res() res) {
        const result = await this.commentService.create(body);
        if (result) {
            res.status(HttpStatus.OK).end('Create successfully');
        }
        res.status(HttpStatus.BAD_REQUEST).end('Failed to create comment');
    }

    @Get(':id')
    async getComment(@Param('id') id, @Res() res) {
        const result = await this.commentService.getComment(id);
        if (result) {
            res.status(HttpStatus.OK).send(result);
        }
        res.status(HttpStatus.BAD_REQUEST).end('Failed to get comment');
    }
}

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { ModelType, prop } from 'typegoose';
import { IsString, IsNumber } from 'class-validator';
import { BaseModel, schemaOptions } from '../shared/model/base-model';

export class Comment extends BaseModel<Comment>{
    @prop()
    @IsNumber()
    @ApiModelProperty()
    customerId: number;

    @prop()
    @IsNumber()
    @ApiModelProperty()
    productId: number;

    @prop()
    @IsNumber()
    @ApiModelProperty()
    rating: number;

    @prop()
    @IsString()
    @ApiModelProperty()
    description: string;

    static get model(): ModelType<Comment> {
        return new Comment().getModelForClass(Comment, { schemaOptions });
    }

    static get modelName(): string {
        return this.model.modelName;
    }
}

export class DeleteCommentVm {
    @ApiModelProperty()
    commentId: number;
}

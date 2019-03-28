import { ApiModelProperty } from '@nestjs/swagger';
import { ModelType, prop } from 'typegoose';
import { BaseModel, schemaOptions } from '../shared/model/base-model';

export class Comment extends BaseModel<Comment>{
    @prop()
    @ApiModelProperty()
    commentId?: number;

    @prop()
    @ApiModelProperty()
    customerId: number;

    @prop()
    @ApiModelProperty()
    productId: number;

    @prop()
    @ApiModelProperty()
    rating: number;

    @prop()
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

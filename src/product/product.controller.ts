import { Get, Controller, Query, Param, Body, Res, HttpStatus, Post, Put, UseGuards, Delete, ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductService } from './product.service';
import { Product, ProductDelete } from './product';

@Controller('product')
export class ProductController {
  constructor(
      private readonly productService: ProductService,
      ) {}

  @Get(':id')
  async getProductById(@Param() id: string) {
    return this.productService.getProductById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() body: Product, @Res() res) {
    const isCreated = await this.productService.create(body);
    if (isCreated) {
      res.status(HttpStatus.OK).end('Create successfully');
    } else {
      res.status(HttpStatus.BAD_REQUEST).end('Create failed');
    }
  }

  // @UseGuards(AuthGuard('jwt'))
  @Put('update')
  async update(@Body() dataUpdate: Product, @Res() res) {
    const updateSuccess = await this.productService.update(dataUpdate);
    if (updateSuccess) {
      res.status(HttpStatus.OK).end('Successfully updated');
    } else {
      res.status(HttpStatus.BAD_REQUEST).end('Update failed');
    }
  }

  // @UseGuards(AuthGuard('jwt'))
  @Delete('delete')
  async delete(@Body() body: ProductDelete, @Res() res) {
    const isDeleted = await this.productService.deletebyId(body.productId);
    if (isDeleted) {
      res.status(HttpStatus.OK).end('Successfully deleted');
    } else {
      res.status(HttpStatus.BAD_REQUEST).end('Delete failed');
    }
  }
}
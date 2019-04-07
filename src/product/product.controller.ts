import { StatusInterceptor } from './../shared/exception-filter/http-interceptor';
import { ExceptionRes } from './../shared/model/response';
import { Get, Controller, Query, Param, Body, Res, HttpStatus, Post, Put, UseGuards, Delete, ForbiddenException,
   UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductService } from './product.service';
import { ProductVm, ProductDeleteVm } from './product.model';
import { ApiBearerAuth, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
  constructor(
      private readonly productService: ProductService,
      ) {}

  @ApiOkResponse({type: ProductVm})
  @ApiBadRequestResponse({
    description: 'Failed to get product',
    type: ExceptionRes,
  })
  @Get(':id')
  async getProductById(@Param('id') id: string, @Res() res) {
    // tslint:disable-next-line:radix
    const productId = parseInt(id);
    if (isNaN(productId)) {
      res.status(HttpStatus.BAD_REQUEST).end('Failed to get product');
    }
    const product = await this.productService.getProductById(productId);
    if (product) {
      res.status(HttpStatus.OK).send(product);
    } else {
      res.status(HttpStatus.BAD_REQUEST).end('Failed to get product');
    }
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOkResponse({type: ProductVm})
  @ApiBadRequestResponse({
    description: 'Failed to create product',
    type: ExceptionRes,
  })
  @Post()
  async create(@Body() body: ProductVm, @Res() res) {
    const isCreated = await this.productService.create(body);
    if (isCreated) {
      res.status(HttpStatus.OK).end('Create successfully');
    } else {
      res.status(HttpStatus.BAD_REQUEST).end('Failed to create product');
    }
  }

  @UseGuards(AuthGuard())
  @ApiOkResponse({description: 'Successfully updated'})
  @ApiBearerAuth()
  @Put()
  async update(@Body() dataUpdate: ProductVm, @Res() res) {
    const updateSuccess = await this.productService.update(dataUpdate);
    if (updateSuccess) {
      res.status(HttpStatus.OK).end('Update successfully');
    } else {
      res.status(HttpStatus.BAD_REQUEST).end('Update failed');
    }
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete()
  async delete(@Body() body: ProductDeleteVm, @Res() res) {
    const isDeleted = await this.productService.deletebyId(body.productId);
    if (isDeleted) {
      res.status(HttpStatus.OK).end('Successfully deleted');
    } else {
      res.status(HttpStatus.BAD_REQUEST).end('Delete failed');
    }
  }
}
import { Get, Controller, Query, Param, Body, Res, HttpStatus, Post, Put, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtStrategy } from './../shared/guard/jwt.strategy';

@Controller('product')
export class ProductController {
  constructor(
      private readonly productService: ProductService,
      ) {}

  @UseGuards(JwtStrategy)
  @Get(':id')
  async getProductById(@Param() id: string) {
    return this.productService.getProductById(id);
  }

  @Post('create')
  async create(@Body() body: any, @Res() res) {
    return this.productService.create(body).then( data => {
      if ( data ) {
        return res.status(HttpStatus.OK).end('OK');
      }
      return res.status(HttpStatus.BAD_REQUEST).end('Failed');
    });
  }

  // @Put('update')
  // async update(@Body() body: ProductVm, @Res() res) {
  //   return this.productService.
  // }
}
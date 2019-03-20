import { HttpStatus } from '@nestjs/common';
import { Controller, Post, Body, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { LoginVm, TokenVm } from './user.model';

@Controller('user')
export class UserController {
  constructor(
    private readonly _userService: UserService) {}
  public errMsg = 'Authorization information is missing or invalid.';

  @ApiOkResponse({type: TokenVm})
  @ApiBadRequestResponse({description: 'Authorization information is missing or invalid.'})
  @Post('login')
  async login(@Body() body: LoginVm, @Res() res) {
    return this._userService.login(body).subscribe(data => {
      res.status(HttpStatus.OK).send(data);
    }, err => {
      res.status(HttpStatus.BAD_REQUEST).end(this.errMsg);
    });
  }
}

import { HttpStatus } from '@nestjs/common';
import { Controller, Post, Body, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { LoginVm, TokenVm, UserRegisterVm, RefreshTokenVm } from './user.model';

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
      res.status(HttpStatus.BAD_REQUEST).end(err.response.data);
    });
  }

  @ApiOkResponse({type: TokenVm})
  @ApiBadRequestResponse({description: 'Authorization information is missing or invalid.'})
  @Post('register')
  async register(@Body() registerInfo: UserRegisterVm, @Res() res) {
    return this._userService.register(registerInfo).subscribe(data => {
      res.status(HttpStatus.OK).send(data);
    }, err => {
      res.status(HttpStatus.BAD_REQUEST).end(err.response.data);
    });
  }
}

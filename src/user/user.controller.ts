import { HttpStatus, Query, BadRequestException, HttpService, BadGatewayException, Catch } from '@nestjs/common';
import { Get, Controller, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Login } from './login.model';

@Controller('user')
export class UserController {
  constructor(
    private readonly _userService: UserService) {}

  @Post('login')
  async login(@Body() body: Login, @Res() res) {
    return this._userService.login(body).subscribe(data => {
      res.status(HttpStatus.OK).send(data);
    });
  }
}

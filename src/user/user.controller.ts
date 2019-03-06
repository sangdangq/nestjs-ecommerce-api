import { HttpStatus, Query } from '@nestjs/common';
import { Get, Controller, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Login } from 'shared/model/user';
import { ClientInfo } from './../shared/model/client';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get('')
  showLoginPage() {
    return 'login page';
  }

  @Post('register')
  async register(@Body() body, @Res() res) {
    this._userService.add(body).then(data => {
      if (data.isSuccessfully) {
        res.status(HttpStatus.OK).end(data.message);
      }
      res.status(HttpStatus.BAD_REQUEST).end(data.message);
    });
  }

  @Post('change-password')
  async changePassword(@Body() body, @Res() res) {
    await this._userService.changePassword(body).then(isSuccess => {
      if (isSuccess) {
        res.status(HttpStatus.OK).end('Successfully');
      }
      res.status(HttpStatus.BAD_REQUEST).end('Failed');
    });
  }

  @Post('delete')
  async delete(@Body() body: Login,  @Res() res) {
    await this._userService.delete(body).then(isSuccess => {
      if (isSuccess) {
        res.status(HttpStatus.OK).end('Successfully');
      }
      res.status(HttpStatus.BAD_REQUEST).end('Failed');
    });
  }

  @Post('login')
  async login(@Body() body: Login,  @Query() client: ClientInfo, @Res() res) {
    await this._userService.login(body, client).then(data => {
      if (data) {
        res.status(HttpStatus.MOVED_PERMANENTLY).end('https://myside/callback?access_token=' + data);
      }
      res.status(HttpStatus.BAD_REQUEST).end('Failed');
    });
  }

  @Post('reset-password')
  async resetPassword(@Body() body: any, @Res() res) {
    await this._userService.resetPassword(body.email).then(isSuccess => {
      if (isSuccess) {
        res.status(HttpStatus.OK).end('Reset password is sent to your email');
      }
      res.status(HttpStatus.BAD_REQUEST).end('Failed');
    });
  }
}

import { HttpStatus, Put, UseGuards, Get, Param } from '@nestjs/common';
import { Controller, Post, Body, Res } from '@nestjs/common';
import { ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import {
  LoginVm,
  TokenVm,
  UserRegisterVm,
  RefreshTokenVm,
  UserUpdate
} from './user.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}
  public errMsg = 'Authorization information is missing or invalid.';

  @ApiOkResponse({ type: TokenVm })
  @Post('login')
  async login(@Body() body: LoginVm, @Res() res) {
    return this._userService.login(body).subscribe(
      data => {
        res.status(HttpStatus.OK).send(data);
      },
      err => {
        res.status(HttpStatus.BAD_REQUEST).end(err.response.data);
      },
    );
  }

  @ApiOkResponse({ type: TokenVm })
  @Post('register')
  async register(@Body() registerInfo: UserRegisterVm, @Res() res) {
    return this._userService.register(registerInfo).subscribe(
      data => {
        res.status(HttpStatus.OK).send(data);
      },
      err => {
        res.status(HttpStatus.BAD_REQUEST).end(err.response.data);
      },
    );
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Put('updateProfile')
  async updateProfile(@Body() body: UserUpdate, @Res() res) {
    const result = await this._userService.updateProfile(body);
    if (result.isSuccess) {
      res.status(HttpStatus.OK).send(result.message);
    } else {
      res.status(HttpStatus.BAD_REQUEST).end('Failed to update user profile');
    }
  }

  @ApiOkResponse({ type: TokenVm })
  @Post('refreshToken')
  async refreshToken(@Body() refreshInfo: RefreshTokenVm, @Res() res) {
    return this._userService.refreshToken(refreshInfo).subscribe(
      data => {
        res.status(HttpStatus.OK).send(data);
      },
      err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.response.data);
      }
    );
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('listUser')
  listUser(@Res() res) {
    this._userService
      .getlistUser()
      .then(data => {
        res.status(HttpStatus.OK).send(data);
      })
      .catch(err => {
        res.status(HttpStatus.BAD_REQUEST).send(err);
      });
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get(':email')
  async userProfile(@Res() res, @Param('email') email: string) {
    const profile = await this._userService.getProfileByEmail(email);
    if (profile) {
      res.status(HttpStatus.OK).send(profile);
    } else {
      res.status(HttpStatus.BAD_REQUEST).end('Failed to get user profile');
    }
  }
}

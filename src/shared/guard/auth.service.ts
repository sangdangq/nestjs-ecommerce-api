import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { JwtPayload, Token } from './payload.model';

@Injectable()
export class AuthService {
  private token: Token;
  constructor(
    private readonly _usersService: UserService,
    private readonly _jwtService: JwtService,
  ) {}

  public async validateUser(payload: JwtPayload): Promise<boolean> {
    if (!payload) {
        return false;
    }
    const user = await this._usersService.getUserbyEmail(payload.email);
    if (user) {
        return true;
    } else {
        return false;
    }
  }

  public async createToken(email: string): Promise<Token> {
    const user = await this._usersService.getUserbyEmail(email);
    const currentUser = {
      username: user.email,
      firstName: user.firstName,
    };
    const accessToken: string = this._jwtService.sign(currentUser);
    this.token = {
      token: accessToken,
      expireIn: 3600,
    };

    return this.token;
  }
}
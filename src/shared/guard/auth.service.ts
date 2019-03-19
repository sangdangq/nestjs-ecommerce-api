import { HttpService } from '@nestjs/common/http';
import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { JwtPayload, Token } from './payload.model';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
        readonly _userService: UserService,
  ) {
  }

  public async validateUser(payload: JwtPayload): Promise<any> {
    return this._userService.getUserbyEmail(payload.email);
  }
}
import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/common/http';
import { map } from 'rxjs/operators';
import { LoginVm, UserRegisterVm, RefreshTokenVm } from './user.model';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        private readonly _http: HttpService,
        @Inject('UserRepo') private readonly userRepo: typeof User,
    ) {}

    public identityUrl = 'https://idensd.herokuapp.com/user/';

    login(userCre: LoginVm) {
        const endpoint = this.identityUrl + 'login';
        return this._http.post(endpoint, userCre)
        .pipe(
                map(response => response.data),
            );
    }

    async getUserbyEmail(userEmail: string) {
        return this.userRepo.findOne({
            where: { Email: userEmail },
        });
    }

    register(registerInfo: UserRegisterVm) {
        const endpoint = this.identityUrl + 'register';
        return this._http.post(endpoint, registerInfo)
        .pipe(
             map(response => response.data),
         );
    }

    refreshToken(refreshInfo: RefreshTokenVm) {
        const endpoint = this.identityUrl + 'refreshToken';
        return this._http.post(endpoint, refreshInfo)
        .pipe(
             map(response => response.data),
         );
    }
}
import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/common/http';
import { map } from 'rxjs/operators';
import { LoginVm } from './user.model';
import { User } from './user.entity';

@Injectable()

export class UserService {
    constructor(
        private readonly _http: HttpService,
        @Inject('UserRepo') private readonly userRepo: typeof User,
        ) {
    }
    public identityUrl = 'https://idensd.herokuapp.com/user/login';

    public login(userCre: LoginVm) {
       return this._http.post(this.identityUrl, userCre)
       .pipe(
            map(response => response.data),
        );
    }

    public async getUserbyEmail(userEmail: string) {
        return this.userRepo.findOne({
            where: { Email: userEmail },
        });
    }
}
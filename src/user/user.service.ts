import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/common/http';
import { Login } from './login.model';
import { map } from 'rxjs/operators';
import { User } from './user.entity';

@Injectable()

export class UserService {
    constructor(
        private readonly _http: HttpService,
        @Inject('UserRepository') private readonly userRepo: typeof User,
        ) {
    }
    public identityUrl = 'https://idensd.herokuapp.com/user/login';

    public login(userCre: Login) {
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
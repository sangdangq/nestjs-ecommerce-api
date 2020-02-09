import { Injectable, Inject } from '@nestjs/common';
import { InjectMapper, AutoMapper } from 'nestjsx-automapper';
import { HttpService } from '@nestjs/common/http';
import { map } from 'rxjs/operators';
import {
  LoginVm,
  UserRegisterVm,
  RefreshTokenVm,
  UserUpdate,
} from './user.model';
import { User } from './user.entity';
import * as crypto from 'crypto-js';

@Injectable()
export class UserService {
  constructor(
    private readonly _http: HttpService,
    @Inject('UserRepository') private readonly userRepo: typeof User,
    @InjectMapper() private readonly _mapper: AutoMapper,
  ) {}

  public identityUrl = 'https://idensd.herokuapp.com/user/';

  login(userCre: LoginVm) {
    const endpoint = this.identityUrl + 'login';
    return this._http
      .post(endpoint, userCre)
      .pipe(map(response => response.data));
  }

  async getUserbyEmail(userEmail: string) {
    return this.userRepo.findOne({
      where: { email: userEmail }
    });
  }

  register(registerInfo: UserRegisterVm) {
    const endpoint = this.identityUrl + 'register';
    return this._http
      .post(endpoint, registerInfo)
      .pipe(map(response => response.data));
  }

  refreshToken(refreshInfo: RefreshTokenVm) {
    const endpoint = this.identityUrl + 'refreshToken';
    return this._http
      .post(endpoint, refreshInfo)
      .pipe(map(response => response.data));
  }

  async getlistUser() {
    return this.userRepo.findAll();
  }

  async getProfileByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  async updateProfile(data: any): Promise<any> {
    const user = await this.userRepo.findOne({ where: { email: data.email } });

    if (data.newPassword && data.newPassword !== data.confirmPassword) {
      return {
        isSuccess: true,
        message: 'Confirm password is not match'
      };
    }
    const hashPassword = crypto.SHA256(data.password).toString();
    if (user) {
      if (hashPassword !== user.password) {
        return {
          isSuccess: false
        };
      }
    } else {
      return {
        isSuccess: false
      };
    }

    const result = this._mapper.map(data.toJSON(), UserUpdate);
    await this.userRepo.update(
      {
        address1: data.address1,
        address2: data.address2,
        agreement: data.agreement,
        birthday: data.birthday,
        city: data.city,
        company: data.company,
        country: data.country,
        firstname: data.firstname,
        gender: data.gender,
        lastname: data.lastname,
        phone: data.phone,
        postcode: data.postcode,
        regionstate: data.regionstate,
        password: crypto.SHA256(data.newPassword).toString()
      },
      {
        where: {
          email: data.email
        }
      },
    );
    return {
      isSuccess: true,
      message: 'User profile is updated successfully'
    };
  }
}

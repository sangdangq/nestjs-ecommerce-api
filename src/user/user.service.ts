import { Injectable, Inject } from '@nestjs/common';
import { User, ResetPassword, AccessToken } from './user.entity';
import { UserRegister, PasswordChange, Login } from 'shared/model/user';
import { ResponseData } from 'shared/model/response';
import { ClientInfo } from 'shared/model/client';
import * as crypto from 'crypto-js';
import * as KJUR from 'jsrsasign';

@Injectable()

export class UserService {
    constructor(
        @Inject('UserRepository') private readonly userRepo: typeof User,
        @Inject('ResetPasswordRepository') private readonly resetPasswordRepo: typeof ResetPassword,
        @Inject('AccessTokenRepo') private readonly accessTokenRepo: typeof AccessToken,
    ) {

    }
    public async add(data: UserRegister): Promise<ResponseData> {
        let user = await this.userRepo.findOne({ where : {email: data.email} });
        if (user) {
            return {
                isSuccessfully: false,
                message: 'User already exists',
            };
        }
        if (data.password !== data.retypePassword) {
            return {
                isSuccessfully: false,
                message: 'Retype password is not match',
            };
        }
        user = new User();
        user.fullname = data.fullname;
        user.email = data.email;
        user.password = data.password;
        await user.save().catch(err => {
            return {
                isSuccessfully: false,
                message: 'Register failed',
            };
        });
        return {
            isSuccessfully: true,
            message: 'Successfully',
        };
    }

    public async changePassword(data: PasswordChange): Promise<boolean> {
        const user = await this.userRepo.findOne({ where : {email: data.email} });
        if (data.newPassword !== data.retypePassword) {
            return false;
        }
        if (user.password === data.oldPassword) {
            await this.userRepo.update({
                password: data.newPassword,
            },
            {
                where: {
                    email: data.email,
                },
            });
            return true;
        }
    }

    public async delete(data: Login): Promise<boolean> {
        const user = await this.userRepo.findOne({ where : {email: data.email} });
        if (user && user.password === data.password) {
            await this.userRepo.destroy({
                where: {email: user.email},
            });
            return true;
        }
        return false;
    }

    public async login(login: Login, clientInfo: ClientInfo): Promise<any> {
        const user = await this.userRepo.findOne({ where : {email: login.email} });
        if (user && user.password === login.password) {
            // jwt.sign();
            // Header
            const oHeader = {alg: 'HS256', typ: 'JWT'};
            // Payload
            const oPayload = {
                email: user.email,
                fullname: user.fullname,
            };
            const tNow = KJUR.jws.IntDate.get('now');
            const tEnd = KJUR.jws.IntDate.get('now + 1day');
            const sHeader = JSON.stringify(oHeader);
            const sPayload = JSON.stringify(oPayload);
            const sJWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, 'mockSecretKey');

            const accessToken = new AccessToken();
            accessToken.email = user.email;
            accessToken.key = sJWT;
            await accessToken.save();
            return sJWT;
        }
    }

    public validateClient(client: ClientInfo) {
    }

    public async resetPassword(emailData: string): Promise<boolean> {
        const user = await this.userRepo.findOne({
            where: { email: emailData },
        });
        if (user) {
            const date = new Date().getUTCMilliseconds();
            const hashString = [user.email, date].join();
            const key = crypto.SHA256(hashString);
            const resetEnt = new ResetPassword();
            resetEnt.email = user.email;
            resetEnt.key = key.toString();
            await resetEnt.save();
            return true;
        }
        return false;
    }

    public getUserbyEmail(userEmail: string): any {
        return this.userRepo.findOne({
            where: { email: userEmail },
        });
    }
}
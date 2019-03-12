export interface JwtPayload {
    email: string;
}

export interface Token {
    token: string;
    expireIn: number;
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Welcome to API server which serve for shoping online app';
  }
}

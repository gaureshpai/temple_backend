import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(private authService: AuthService) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    let tokenArray = req.headers.authorization;
    // console.log('this authinterceptor', tokenArray);
    if (tokenArray) {
      req.headers['user'] = this.authService.decodeToken(tokenArray.split(' ')[1]).user;
    }

    return next
      .handle()
      .pipe
      ();
  }
}


import { Injectable, NestInterceptor, ExecutionContext, CallHandler, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UnauthorizedError } from '../types/UnauthorizedError';

export interface Response<T> {
  data: T;
}

@Injectable()
export class UnauthorizedInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      catchError( error => {
        if (error instanceof UnauthorizedError) {
          throw new UnauthorizedException(error.message)
        } else {
          throw error;
        }
    }));
  }
}
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BusinessError } from "../shared/errors/business-errors";

@Injectable()
export class BusinessErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle()
            .pipe(catchError(error => {
                if (error.type === BusinessError.NOT_FOUND)
                    throw new HttpException(error.message, HttpStatus.NOT_FOUND);
                else if (error.type === BusinessError.PRECONDITION_FAILED)
                    throw new HttpException(error.message, HttpStatus.PRECONDITION_FAILED);
                else
                    throw error;
            }));
    }
}
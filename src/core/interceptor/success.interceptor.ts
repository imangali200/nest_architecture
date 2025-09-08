import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface SuccessResponse<T>{
    data: T,
    timestamp:string
}

@Injectable()
export class SuccessInterceptor<T> implements NestInterceptor<T, SuccessResponse<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<SuccessResponse<T>> {
        console.log('Before...');

        const now = Date.now();
        return next
            .handle()
            .pipe(
                map((data)=>{
                    const response:SuccessResponse<T> = {
                        timestamp:new Date().toISOString(),
                        data: {} as T

                    }
                    if(data && typeof data === "object" && 'id' in data ){
                        response.data = data
                    }else{
                        response.data = data
                    }
                    return response
                })
            )
            
    }
}
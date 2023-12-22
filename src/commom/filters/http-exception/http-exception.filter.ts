import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus()
    const exectionResponse = exception.getResponse()

    const erro = typeof exectionResponse === 'string' ?
      { message : exectionResponse } :
      (exectionResponse as object)

      response.status(status).json({ ...erro, timestamp: new Date().toISOString()})
  }
}

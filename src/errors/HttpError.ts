import { HttpException } from "@nestjs/common";

export class HttpError extends HttpException {
    constructor(statusCode: number, errorType: string, message: string) {
      super(message, statusCode, {cause: new Error(errorType)})
    }
}
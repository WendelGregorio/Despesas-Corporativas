export class HttpError extends Error {
    constructor(statusCode, errorType, message: string) {
      super(message)
    }
}
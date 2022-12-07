import { HttpError } from "./HttpError"
export class BadRequest extends HttpError {
  constructor(message) {
    super(400, 'BadRequest', message)
  }
}
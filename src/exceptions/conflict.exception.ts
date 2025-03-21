import { HttpPhrase, HttpStatus } from '../enums'
import { HttpException } from './http.exception'

/**
 * Exception for HTTP 409 Conflict errors
 */
export class ConflictException extends HttpException {
	constructor(message: string = HttpPhrase.CONFLICT) {
		super(message, HttpStatus.CONFLICT)
	}
}

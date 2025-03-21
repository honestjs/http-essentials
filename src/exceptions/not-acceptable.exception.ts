import { HttpPhrase, HttpStatus } from '../enums'
import { HttpException } from './http.exception'

/**
 * Exception for HTTP 406 Not Acceptable errors
 */
export class NotAcceptableException extends HttpException {
	constructor(message: string = HttpPhrase.NOT_ACCEPTABLE) {
		super(message, HttpStatus.NOT_ACCEPTABLE)
	}
}

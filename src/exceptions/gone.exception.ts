import { HttpPhrase, HttpStatus } from '../enums'
import { HttpException } from './http.exception'

/**
 * Exception for HTTP 410 Gone errors
 */
export class GoneException extends HttpException {
	constructor(message: string = HttpPhrase.GONE) {
		super(message, HttpStatus.GONE)
	}
}

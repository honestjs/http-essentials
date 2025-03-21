import { HttpPhrase, HttpStatus } from '../enums'
import { HttpException } from './http.exception'

/**
 * Exception for HTTP 411 Length Required errors
 */
export class LengthRequiredException extends HttpException {
	constructor(message: string = HttpPhrase.LENGTH_REQUIRED) {
		super(message, HttpStatus.LENGTH_REQUIRED)
	}
}

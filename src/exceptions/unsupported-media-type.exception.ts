import { HttpPhrase, HttpStatus } from '../enums'
import { HttpException } from './http.exception'

/**
 * Exception for HTTP 415 Unsupported Media Type errors
 */
export class UnsupportedMediaTypeException extends HttpException {
	constructor(message: string = HttpPhrase.UNSUPPORTED_MEDIA_TYPE) {
		super(message, HttpStatus.UNSUPPORTED_MEDIA_TYPE)
	}
}

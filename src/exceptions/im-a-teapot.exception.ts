import { HttpPhrase, HttpStatus } from '../enums'
import { HttpException } from './http.exception'

/**
 * Exception for HTTP 418 I'm a teapot errors (RFC 2324)
 */
export class ImATeapotException extends HttpException {
	constructor(message: string = HttpPhrase.IM_A_TEAPOT) {
		super(message, HttpStatus.IM_A_TEAPOT)
	}
}

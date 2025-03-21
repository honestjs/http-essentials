import { HttpPhrase, HttpStatus } from '../enums'
import { HttpException } from './http.exception'

/**
 * Exception for HTTP 402 Payment Required errors
 */
export class PaymentRequiredException extends HttpException {
	constructor(message: string = HttpPhrase.PAYMENT_REQUIRED) {
		super(message, HttpStatus.PAYMENT_REQUIRED)
	}
}

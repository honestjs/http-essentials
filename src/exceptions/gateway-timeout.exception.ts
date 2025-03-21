import { HttpPhrase, HttpStatus } from '../enums'
import { HttpException } from './http.exception'

/**
 * Exception for HTTP 504 Gateway Timeout errors
 */
export class GatewayTimeoutException extends HttpException {
	constructor(message: string = HttpPhrase.GATEWAY_TIMEOUT) {
		super(message, HttpStatus.GATEWAY_TIMEOUT)
	}
}

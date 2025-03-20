import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 408 Request Timeout errors
 */
export class RequestTimeoutException extends HttpException {
	constructor(message: string = HttpPhrase.REQUEST_TIMEOUT) {
		super(message, HttpStatus.REQUEST_TIMEOUT);
	}
}

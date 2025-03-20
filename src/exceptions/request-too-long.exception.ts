import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 413 Request Too Long errors
 */
export class RequestTooLongException extends HttpException {
	constructor(message: string = HttpPhrase.REQUEST_TOO_LONG) {
		super(message, HttpStatus.REQUEST_TOO_LONG);
	}
}

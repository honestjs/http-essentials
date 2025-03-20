import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 501 Not Implemented errors
 */
export class NotImplementedException extends HttpException {
	constructor(message: string = HttpPhrase.NOT_IMPLEMENTED) {
		super(message, HttpStatus.NOT_IMPLEMENTED);
	}
}

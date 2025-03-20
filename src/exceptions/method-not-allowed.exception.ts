import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 405 Method Not Allowed errors
 */
export class MethodNotAllowedException extends HttpException {
	constructor(message: string = HttpPhrase.METHOD_NOT_ALLOWED) {
		super(message, HttpStatus.METHOD_NOT_ALLOWED);
	}
}

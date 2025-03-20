import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 404 Not Found errors
 */
export class NotFoundException extends HttpException {
	constructor(message: string = HttpPhrase.NOT_FOUND) {
		super(message, HttpStatus.NOT_FOUND);
	}
}

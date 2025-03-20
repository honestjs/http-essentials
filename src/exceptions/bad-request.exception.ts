import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 400 Bad Request errors
 */
export class BadRequestException extends HttpException {
	constructor(message: string = HttpPhrase.BAD_REQUEST) {
		super(message, HttpStatus.BAD_REQUEST);
	}
}

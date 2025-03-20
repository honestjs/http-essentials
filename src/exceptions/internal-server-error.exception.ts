import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 500 Internal Server Error errors
 */
export class InternalServerErrorException extends HttpException {
	constructor(message: string = HttpPhrase.INTERNAL_SERVER_ERROR) {
		super(message, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}

import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 403 Forbidden errors
 */
export class ForbiddenException extends HttpException {
	constructor(message: string = HttpPhrase.FORBIDDEN) {
		super(message, HttpStatus.FORBIDDEN);
	}
}

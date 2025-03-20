import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 401 Unauthorized errors
 */
export class UnauthorizedException extends HttpException {
	constructor(message: string = HttpPhrase.UNAUTHORIZED) {
		super(message, HttpStatus.UNAUTHORIZED);
	}
}

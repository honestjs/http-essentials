import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 503 Service Unavailable errors
 */
export class ServiceUnavailableException extends HttpException {
	constructor(message: string = HttpPhrase.SERVICE_UNAVAILABLE) {
		super(message, HttpStatus.SERVICE_UNAVAILABLE);
	}
}

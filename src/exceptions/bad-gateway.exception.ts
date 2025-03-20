import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 502 Bad Gateway errors
 */
export class BadGatewayException extends HttpException {
	constructor(message: string = HttpPhrase.BAD_GATEWAY) {
		super(message, HttpStatus.BAD_GATEWAY);
	}
}

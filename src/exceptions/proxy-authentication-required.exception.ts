import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 407 Proxy Authentication Required errors
 */
export class ProxyAuthenticationRequiredException extends HttpException {
	constructor(message: string = HttpPhrase.PROXY_AUTHENTICATION_REQUIRED) {
		super(message, HttpStatus.PROXY_AUTHENTICATION_REQUIRED);
	}
} 
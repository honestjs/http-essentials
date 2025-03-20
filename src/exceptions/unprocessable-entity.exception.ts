import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 422 Unprocessable Entity errors
 */
export class UnprocessableEntityException extends HttpException {
	constructor(message: string = HttpPhrase.UNPROCESSABLE_ENTITY) {
		super(message, HttpStatus.UNPROCESSABLE_ENTITY);
	}
}

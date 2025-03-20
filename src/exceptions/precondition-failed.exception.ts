import { HttpPhrase, HttpStatus } from '@/enums';
import { HttpException } from './http.exception';

/**
 * Exception for HTTP 412 Precondition Failed errors
 */
export class PreconditionFailedException extends HttpException {
	constructor(message: string = HttpPhrase.PRECONDITION_FAILED) {
		super(message, HttpStatus.PRECONDITION_FAILED);
	}
}

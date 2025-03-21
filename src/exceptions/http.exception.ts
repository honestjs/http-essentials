import { HttpPhrase, HttpStatus } from '../enums'

/**
 * Base HTTP exception class
 */
export class HttpException extends Error {
	constructor(
		public readonly message: string = HttpPhrase.INTERNAL_SERVER_ERROR,
		public readonly status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
		public readonly cause?: unknown
	) {
		super(message, { cause })
		this.name = this.constructor.name
		Error.captureStackTrace(this, this.constructor)
	}
}

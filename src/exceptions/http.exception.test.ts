import { describe, expect, test } from 'bun:test'
import { HttpPhrase, HttpStatus } from '../enums'
import { HttpException } from './http.exception'
import {
	BadRequestException,
	UnauthorizedException,
	ForbiddenException,
	NotFoundException,
	ConflictException,
	InternalServerErrorException,
	BadGatewayException,
	ServiceUnavailableException,
	GatewayTimeoutException,
	GoneException,
	ImATeapotException,
	MethodNotAllowedException,
	NotAcceptableException,
	NotImplementedException,
	PaymentRequiredException,
	PreconditionFailedException,
	RequestTimeoutException,
	RequestTooLongException,
	UnprocessableEntityException,
	UnsupportedMediaTypeException,
	LengthRequiredException,
	ProxyAuthenticationRequiredException
} from './index'

describe('HttpException base', () => {
	test('defaults to 500 and Internal Server Error', () => {
		const err = new HttpException()
		expect(err.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR)
		expect(err.message).toBe(HttpPhrase.INTERNAL_SERVER_ERROR)
		expect(err.name).toBe('HttpException')
		expect(err).toBeInstanceOf(Error)
	})

	test('accepts custom message and status', () => {
		const err = new HttpException('Custom', HttpStatus.BAD_REQUEST)
		expect(err.status).toBe(400)
		expect(err.message).toBe('Custom')
	})

	test('cause is passed through', () => {
		const cause = new Error('root cause')
		const err = new HttpException('Wrapped', HttpStatus.INTERNAL_SERVER_ERROR, cause)
		expect(err.cause).toBe(cause)
	})
})

const exceptionCases: [string, new (msg?: string) => HttpException, number, string][] = [
	['BadRequestException', BadRequestException, 400, HttpPhrase.BAD_REQUEST],
	['UnauthorizedException', UnauthorizedException, 401, HttpPhrase.UNAUTHORIZED],
	['PaymentRequiredException', PaymentRequiredException, 402, HttpPhrase.PAYMENT_REQUIRED],
	['ForbiddenException', ForbiddenException, 403, HttpPhrase.FORBIDDEN],
	['NotFoundException', NotFoundException, 404, HttpPhrase.NOT_FOUND],
	['MethodNotAllowedException', MethodNotAllowedException, 405, HttpPhrase.METHOD_NOT_ALLOWED],
	['NotAcceptableException', NotAcceptableException, 406, HttpPhrase.NOT_ACCEPTABLE],
	['ProxyAuthenticationRequiredException', ProxyAuthenticationRequiredException, 407, HttpPhrase.PROXY_AUTHENTICATION_REQUIRED],
	['RequestTimeoutException', RequestTimeoutException, 408, HttpPhrase.REQUEST_TIMEOUT],
	['ConflictException', ConflictException, 409, HttpPhrase.CONFLICT],
	['GoneException', GoneException, 410, HttpPhrase.GONE],
	['LengthRequiredException', LengthRequiredException, 411, HttpPhrase.LENGTH_REQUIRED],
	['PreconditionFailedException', PreconditionFailedException, 412, HttpPhrase.PRECONDITION_FAILED],
	['RequestTooLongException', RequestTooLongException, 413, HttpPhrase.REQUEST_TOO_LONG],
	['UnsupportedMediaTypeException', UnsupportedMediaTypeException, 415, HttpPhrase.UNSUPPORTED_MEDIA_TYPE],
	['ImATeapotException', ImATeapotException, 418, HttpPhrase.IM_A_TEAPOT],
	['UnprocessableEntityException', UnprocessableEntityException, 422, HttpPhrase.UNPROCESSABLE_ENTITY],
	['InternalServerErrorException', InternalServerErrorException, 500, HttpPhrase.INTERNAL_SERVER_ERROR],
	['NotImplementedException', NotImplementedException, 501, HttpPhrase.NOT_IMPLEMENTED],
	['BadGatewayException', BadGatewayException, 502, HttpPhrase.BAD_GATEWAY],
	['ServiceUnavailableException', ServiceUnavailableException, 503, HttpPhrase.SERVICE_UNAVAILABLE],
	['GatewayTimeoutException', GatewayTimeoutException, 504, HttpPhrase.GATEWAY_TIMEOUT],
]

describe('Exception subclasses', () => {
	for (const [name, ExceptionClass, expectedStatus, expectedPhrase] of exceptionCases) {
		test(`${name} has status ${expectedStatus} and correct defaults`, () => {
			const err = new ExceptionClass()
			expect(err.status).toBe(expectedStatus)
			expect(err.message).toBe(expectedPhrase)
			expect(err.name).toBe(name)
			expect(err).toBeInstanceOf(HttpException)
			expect(err).toBeInstanceOf(Error)
		})

		test(`${name} accepts custom message`, () => {
			const err = new ExceptionClass('Custom message')
			expect(err.message).toBe('Custom message')
			expect(err.status).toBe(expectedStatus)
		})
	}
})

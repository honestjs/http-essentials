import { HttpStatus } from '@/enums';
import type { Type } from '@/interfaces';

import {
	BadGatewayException,
	BadRequestException,
	ConflictException,
	ForbiddenException,
	GatewayTimeoutException,
	GoneException,
	ImATeapotException,
	InternalServerErrorException,
	MethodNotAllowedException,
	NotAcceptableException,
	NotFoundException,
	NotImplementedException,
	PreconditionFailedException,
	RequestTimeoutException,
	RequestTooLongException,
	ServiceUnavailableException,
	UnauthorizedException,
	UnprocessableEntityException,
	UnsupportedMediaTypeException,
} from '@/exceptions';


/**
 * Union type of all error HTTP status codes
 */
export type ErrorHttpStatusCode =
	| HttpStatus.BAD_GATEWAY
	| HttpStatus.BAD_REQUEST
	| HttpStatus.CONFLICT
	| HttpStatus.FORBIDDEN
	| HttpStatus.GATEWAY_TIMEOUT
	| HttpStatus.GONE
	| HttpStatus.IM_A_TEAPOT
	| HttpStatus.INTERNAL_SERVER_ERROR
	| HttpStatus.METHOD_NOT_ALLOWED
	| HttpStatus.NOT_ACCEPTABLE
	| HttpStatus.NOT_FOUND
	| HttpStatus.NOT_IMPLEMENTED
	| HttpStatus.REQUEST_TOO_LONG
	| HttpStatus.PRECONDITION_FAILED
	| HttpStatus.REQUEST_TIMEOUT
	| HttpStatus.SERVICE_UNAVAILABLE
	| HttpStatus.UNAUTHORIZED
	| HttpStatus.UNPROCESSABLE_ENTITY
	| HttpStatus.UNSUPPORTED_MEDIA_TYPE;

/**
 * Mapping of HTTP status codes to their corresponding exception classes
 */
export const HttpErrorByCode: Record<ErrorHttpStatusCode, Type<unknown>> = {
	[HttpStatus.BAD_GATEWAY]: BadGatewayException,
	[HttpStatus.BAD_REQUEST]: BadRequestException,
	[HttpStatus.CONFLICT]: ConflictException,
	[HttpStatus.FORBIDDEN]: ForbiddenException,
	[HttpStatus.GATEWAY_TIMEOUT]: GatewayTimeoutException,
	[HttpStatus.GONE]: GoneException,
	[HttpStatus.IM_A_TEAPOT]: ImATeapotException,
	[HttpStatus.INTERNAL_SERVER_ERROR]: InternalServerErrorException,
	[HttpStatus.METHOD_NOT_ALLOWED]: MethodNotAllowedException,
	[HttpStatus.NOT_ACCEPTABLE]: NotAcceptableException,
	[HttpStatus.NOT_FOUND]: NotFoundException,
	[HttpStatus.NOT_IMPLEMENTED]: NotImplementedException,
	[HttpStatus.REQUEST_TOO_LONG]: RequestTooLongException,
	[HttpStatus.PRECONDITION_FAILED]: PreconditionFailedException,
	[HttpStatus.REQUEST_TIMEOUT]: RequestTimeoutException,
	[HttpStatus.SERVICE_UNAVAILABLE]: ServiceUnavailableException,
	[HttpStatus.UNAUTHORIZED]: UnauthorizedException,
	[HttpStatus.UNPROCESSABLE_ENTITY]: UnprocessableEntityException,
	[HttpStatus.UNSUPPORTED_MEDIA_TYPE]: UnsupportedMediaTypeException,
};

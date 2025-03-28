// Source https://github.com/prettymuchbryce/http-status-codes/blob/master/src/utils.ts
import { HttpPhrase, HttpStatus } from '../enums'

export const httpStatusByPhrase: Record<HttpPhrase, HttpStatus> = {
	[HttpPhrase.ACCEPTED]: HttpStatus.ACCEPTED,
	[HttpPhrase.BAD_GATEWAY]: HttpStatus.BAD_GATEWAY,
	[HttpPhrase.BAD_REQUEST]: HttpStatus.BAD_REQUEST,
	[HttpPhrase.CONFLICT]: HttpStatus.CONFLICT,
	[HttpPhrase.CONTINUE]: HttpStatus.CONTINUE,
	[HttpPhrase.CREATED]: HttpStatus.CREATED,
	[HttpPhrase.EXPECTATION_FAILED]: HttpStatus.EXPECTATION_FAILED,
	[HttpPhrase.FAILED_DEPENDENCY]: HttpStatus.FAILED_DEPENDENCY,
	[HttpPhrase.FORBIDDEN]: HttpStatus.FORBIDDEN,
	[HttpPhrase.GATEWAY_TIMEOUT]: HttpStatus.GATEWAY_TIMEOUT,
	[HttpPhrase.GONE]: HttpStatus.GONE,
	[HttpPhrase.HTTP_VERSION_NOT_SUPPORTED]: HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
	[HttpPhrase.IM_A_TEAPOT]: HttpStatus.IM_A_TEAPOT,
	[HttpPhrase.INSUFFICIENT_SPACE_ON_RESOURCE]: HttpStatus.INSUFFICIENT_SPACE_ON_RESOURCE,
	[HttpPhrase.INSUFFICIENT_STORAGE]: HttpStatus.INSUFFICIENT_STORAGE,
	[HttpPhrase.INTERNAL_SERVER_ERROR]: HttpStatus.INTERNAL_SERVER_ERROR,
	[HttpPhrase.LENGTH_REQUIRED]: HttpStatus.LENGTH_REQUIRED,
	[HttpPhrase.LOCKED]: HttpStatus.LOCKED,
	[HttpPhrase.METHOD_FAILURE]: HttpStatus.METHOD_FAILURE,
	[HttpPhrase.METHOD_NOT_ALLOWED]: HttpStatus.METHOD_NOT_ALLOWED,
	[HttpPhrase.MOVED_PERMANENTLY]: HttpStatus.MOVED_PERMANENTLY,
	[HttpPhrase.MOVED_TEMPORARILY]: HttpStatus.MOVED_TEMPORARILY,
	[HttpPhrase.MULTI_STATUS]: HttpStatus.MULTI_STATUS,
	[HttpPhrase.MULTIPLE_CHOICES]: HttpStatus.MULTIPLE_CHOICES,
	[HttpPhrase.NETWORK_AUTHENTICATION_REQUIRED]: HttpStatus.NETWORK_AUTHENTICATION_REQUIRED,
	[HttpPhrase.NO_CONTENT]: HttpStatus.NO_CONTENT,
	[HttpPhrase.NON_AUTHORITATIVE_INFORMATION]: HttpStatus.NON_AUTHORITATIVE_INFORMATION,
	[HttpPhrase.NOT_ACCEPTABLE]: HttpStatus.NOT_ACCEPTABLE,
	[HttpPhrase.NOT_FOUND]: HttpStatus.NOT_FOUND,
	[HttpPhrase.NOT_IMPLEMENTED]: HttpStatus.NOT_IMPLEMENTED,
	[HttpPhrase.NOT_MODIFIED]: HttpStatus.NOT_MODIFIED,
	[HttpPhrase.OK]: HttpStatus.OK,
	[HttpPhrase.PARTIAL_CONTENT]: HttpStatus.PARTIAL_CONTENT,
	[HttpPhrase.PAYMENT_REQUIRED]: HttpStatus.PAYMENT_REQUIRED,
	[HttpPhrase.PERMANENT_REDIRECT]: HttpStatus.PERMANENT_REDIRECT,
	[HttpPhrase.PRECONDITION_FAILED]: HttpStatus.PRECONDITION_FAILED,
	[HttpPhrase.PRECONDITION_REQUIRED]: HttpStatus.PRECONDITION_REQUIRED,
	[HttpPhrase.PROCESSING]: HttpStatus.PROCESSING,
	[HttpPhrase.EARLY_HINTS]: HttpStatus.EARLY_HINTS,
	[HttpPhrase.UPGRADE_REQUIRED]: HttpStatus.UPGRADE_REQUIRED,
	[HttpPhrase.PROXY_AUTHENTICATION_REQUIRED]: HttpStatus.PROXY_AUTHENTICATION_REQUIRED,
	[HttpPhrase.REQUEST_HEADER_FIELDS_TOO_LARGE]: HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE,
	[HttpPhrase.REQUEST_TIMEOUT]: HttpStatus.REQUEST_TIMEOUT,
	[HttpPhrase.REQUEST_TOO_LONG]: HttpStatus.REQUEST_TOO_LONG,
	[HttpPhrase.REQUEST_URI_TOO_LONG]: HttpStatus.REQUEST_URI_TOO_LONG,
	[HttpPhrase.REQUESTED_RANGE_NOT_SATISFIABLE]: HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE,
	[HttpPhrase.RESET_CONTENT]: HttpStatus.RESET_CONTENT,
	[HttpPhrase.SEE_OTHER]: HttpStatus.SEE_OTHER,
	[HttpPhrase.SERVICE_UNAVAILABLE]: HttpStatus.SERVICE_UNAVAILABLE,
	[HttpPhrase.SWITCHING_PROTOCOLS]: HttpStatus.SWITCHING_PROTOCOLS,
	[HttpPhrase.TEMPORARY_REDIRECT]: HttpStatus.TEMPORARY_REDIRECT,
	[HttpPhrase.TOO_MANY_REQUESTS]: HttpStatus.TOO_MANY_REQUESTS,
	[HttpPhrase.UNAUTHORIZED]: HttpStatus.UNAUTHORIZED,
	[HttpPhrase.UNAVAILABLE_FOR_LEGAL_REASONS]: HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS,
	[HttpPhrase.UNPROCESSABLE_ENTITY]: HttpStatus.UNPROCESSABLE_ENTITY,
	[HttpPhrase.UNSUPPORTED_MEDIA_TYPE]: HttpStatus.UNSUPPORTED_MEDIA_TYPE,
	[HttpPhrase.USE_PROXY]: HttpStatus.USE_PROXY,
	[HttpPhrase.MISDIRECTED_REQUEST]: HttpStatus.MISDIRECTED_REQUEST,
}

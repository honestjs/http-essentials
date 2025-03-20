/**
 * Enum representing HTTP methods
 */
export enum HttpMethod {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	DELETE = 'delete',
	PATCH = 'patch',
	ALL = 'all',
	OPTIONS = 'options',
	HEAD = 'head',
	CONNECT = 'connect',
	TRACE = 'trace',
	PROPFIND = 'propfind',
	PROPPATCH = 'proppatch',
	MKCOL = 'mkcol',
	COPY = 'copy',
	MOVE = 'move',
	LOCK = 'lock',
	UNLOCK = 'unlock',
	PURGE = 'purge',
	LINK = 'link',
	UNLINK = 'unlink',
	MERGE = 'merge',
	REPORT = 'report',
	SEARCH = 'search',
	MKACTIVITY = 'mkactivity',
	CHECKOUT = 'checkout',
	NOTIFY = 'notify',
	SUBSCRIBE = 'subscribe',
	UNSUBSCRIBE = 'unsubscribe',
}

/**
 * Type for HTTP methods, allowing both enum values and custom string methods
 */
export type HttpMethodType = HttpMethod | string;

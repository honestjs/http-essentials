/**
 * Enum representing HTTP methods
 */
export enum HttpMethod {
	// Standard HTTP methods (RFC 7231)
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	DELETE = 'delete',
	HEAD = 'head',
	OPTIONS = 'options',
	CONNECT = 'connect',
	TRACE = 'trace',

	// HTTP PATCH (RFC 5789)
	PATCH = 'patch',

	// PATCH framework for HTTP (RFC 5842)
	REPORT = 'report',
	SEARCH = 'search',

	// WebDAV methods (RFC 4918)
	PROPFIND = 'propfind',
	PROPPATCH = 'proppatch',
	MKCOL = 'mkcol',
	COPY = 'copy',
	MOVE = 'move',
	LOCK = 'lock',
	UNLOCK = 'unlock',

	// WebDAV versioning extensions (RFC 3253)
	VERSION_CONTROL = 'version-control',
	BASELINE_CONTROL = 'baseline-control',
	LABEL = 'label',
	CHECKIN = 'checkin',
	UNCHECKOUT = 'uncheckout',
	MKWORKSPACE = 'mkworkspace',
	UPDATE = 'update',

	// CalDAV (RFC 4791)
	MKCALENDAR = 'mkcalendar',

	// WebDAV Binding Extensions (RFC 5842)
	BIND = 'bind',
	UNBIND = 'unbind',
	REBIND = 'rebind',

	// Additional WebDAV extensions
	ACL = 'acl',

	// UPnP specific
	M_SEARCH = 'm-search',

	// Icecast streaming specific
	SOURCE = 'source',

	// RTSP methods (RFC 2326)
	DESCRIBE = 'describe',
	ANNOUNCE = 'announce',
	SETUP = 'setup',
	PLAY = 'play',
	PAUSE = 'pause',
	TEARDOWN = 'teardown',
	GET_PARAMETER = 'get_parameter',
	SET_PARAMETER = 'set_parameter',
	REDIRECT = 'redirect',
	RECORD = 'record',

	// RAOP (Remote Audio Output Protocol)
	FLUSH = 'flush',

	// Draft HTTP method with request body
	QUERY = 'query',

	// Miscellaneous and CDN-specific methods
	PURGE = 'purge',
	LINK = 'link',
	UNLINK = 'unlink',
	MERGE = 'merge',

	// Methods used in various implementations
	MKACTIVITY = 'mkactivity',
	CHECKOUT = 'checkout',
	NOTIFY = 'notify',
	SUBSCRIBE = 'subscribe',
	UNSUBSCRIBE = 'unsubscribe',

	// HTTP/2 specific (RFC 7540)
	PRI = 'pri',
}

# HTTP Essentials

A lightweight TypeScript package providing HTTP statuses, phrases, and exceptions.

## Installation

```bash
npm install http-essentials
# or
yarn add http-essentials
# or
bun add http-essentials
```

## Features

- HTTP Status Codes (as enum)
- HTTP Phrases (as enum)
- HTTP Exceptions (with default messages)
- Status-Phrase mapping utilities
- TypeScript support
- Zero dependencies
- Tree-shakeable
- ESM support

## Usage

### Basic Status and Phrase Usage

```typescript
import { HttpStatus, HttpPhrase } from 'http-essentials';

// Using HTTP Status codes
console.log(HttpStatus.OK); // 200
console.log(HttpStatus.NOT_FOUND); // 404

// Using HTTP Phrases
console.log(HttpPhrase.OK); // "OK"
console.log(HttpPhrase.NOT_FOUND); // "Not Found"
```

### Exception Handling

```typescript
import { NotFoundException, BadRequestException } from 'http-essentials';

// Using default message
throw new NotFoundException();
// Results in: { status: 404, message: "Not Found" }

// Using custom message
throw new BadRequestException('Invalid email format');
// Results in: { status: 400, message: "Invalid email format" }

// Accessing exception properties
try {
  throw new NotFoundException('User not found');
} catch (error) {
  if (error instanceof NotFoundException) {
    console.log(error.status); // 404
    console.log(error.message); // "User not found"
  }
}
```

### Helper Functions

```typescript
import { httpStatusByPhrase, httpPhraseByStatus } from 'http-essentials';

// Convert phrase to status code
const status = httpStatusByPhrase[HttpPhrase.NOT_FOUND]; // 404

// Convert status code to phrase
const phrase = httpPhraseByStatus[HttpStatus.NOT_FOUND]; // "Not Found"
```

## API Reference

### Available Exceptions

All exceptions extend the base `HttpException` class and include:

| Exception Class | Status Code | Default Message |
|----------------|-------------|-----------------|
| BadRequestException | 400 | Bad Request |
| UnauthorizedException | 401 | Unauthorized |
| PaymentRequiredException | 402 | Payment Required |
| ForbiddenException | 403 | Forbidden |
| NotFoundException | 404 | Not Found |
| MethodNotAllowedException | 405 | Method Not Allowed |
| NotAcceptableException | 406 | Not Acceptable |
| ProxyAuthenticationRequiredException | 407 | Proxy Authentication Required |
| RequestTimeoutException | 408 | Request Timeout |
| ConflictException | 409 | Conflict |
| GoneException | 410 | Gone |
| LengthRequiredException | 411 | Length Required |
| PreconditionFailedException | 412 | Precondition Failed |
| RequestTooLongException | 413 | Request Entity Too Large |
| UnsupportedMediaTypeException | 415 | Unsupported Media Type |
| ImATeapotException | 418 | I'm a teapot |
| UnprocessableEntityException | 422 | Unprocessable Entity |
| InternalServerErrorException | 500 | Internal Server Error |
| NotImplementedException | 501 | Not Implemented |
| BadGatewayException | 502 | Bad Gateway |
| ServiceUnavailableException | 503 | Service Unavailable |
| GatewayTimeoutException | 504 | Gateway Timeout |

### HTTP Status Codes

The `HttpStatus` enum contains all standard HTTP status codes with their numerical values. Each status code includes JSDoc documentation with official RFC references and descriptions.

Categories:
- 1xx (Informational): 100-199
- 2xx (Success): 200-299
- 3xx (Redirection): 300-399
- 4xx (Client Error): 400-499
- 5xx (Server Error): 500-599

### HTTP Phrases

The `HttpPhrase` enum contains all standard HTTP status phrases. Each phrase includes JSDoc documentation with official RFC references and descriptions.

## License

MIT © [Orkhan Karimov](https://github.com/kerimovok) 
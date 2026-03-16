import { describe, expect, test } from 'bun:test'
import { HttpPhrase, HttpStatus } from '../enums'
import { httpPhraseByStatus } from './http-phrase-by-status.constant'
import { httpStatusByPhrase } from './http-status-by-phrase.constant'
import { HttpErrorByCode } from './http-error-by-code.constant'

describe('httpPhraseByStatus / httpStatusByPhrase consistency', () => {
	test('every status in httpPhraseByStatus maps back via httpStatusByPhrase', () => {
		for (const [statusStr, phrase] of Object.entries(httpPhraseByStatus)) {
			const status = Number(statusStr) as HttpStatus
			const reverseStatus = httpStatusByPhrase[phrase as HttpPhrase]
			expect(reverseStatus).toBeDefined()
			expect(reverseStatus).toBe(status)
		}
	})

	test('common statuses are present', () => {
		expect(httpPhraseByStatus[HttpStatus.OK]).toBe(HttpPhrase.OK)
		expect(httpPhraseByStatus[HttpStatus.NOT_FOUND]).toBe(HttpPhrase.NOT_FOUND)
		expect(httpPhraseByStatus[HttpStatus.INTERNAL_SERVER_ERROR]).toBe(HttpPhrase.INTERNAL_SERVER_ERROR)
		expect(httpPhraseByStatus[HttpStatus.BAD_REQUEST]).toBe(HttpPhrase.BAD_REQUEST)
	})
})

describe('HttpErrorByCode', () => {
	test('returns correct exception constructor for common codes', () => {
		const err400 = new HttpErrorByCode[HttpStatus.BAD_REQUEST]() as Error
		expect(err400).toBeInstanceOf(Error)

		const err404 = new HttpErrorByCode[HttpStatus.NOT_FOUND]() as Error
		expect(err404).toBeInstanceOf(Error)

		const err500 = new HttpErrorByCode[HttpStatus.INTERNAL_SERVER_ERROR]() as Error
		expect(err500).toBeInstanceOf(Error)
	})

	test('all error status codes have a mapping', () => {
		const errorStatuses = [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 415, 418, 422, 500, 501, 502, 503]
		for (const status of errorStatuses) {
			expect(HttpErrorByCode[status as keyof typeof HttpErrorByCode]).toBeDefined()
		}
	})
})

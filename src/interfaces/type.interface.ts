/**
 * Generic type interface
 */
export interface Type<T = any> extends Function {
	new (...args: any[]): T;
}

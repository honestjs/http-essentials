// Source: https://github.com/nestjs/nest/blob/master/packages/common/enums/shutdown-signal.enum.ts
export enum ShutdownSignal {
	SIGHUP = 'SIGHUP',
	SIGINT = 'SIGINT',
	SIGQUIT = 'SIGQUIT',
	SIGILL = 'SIGILL',
	SIGTRAP = 'SIGTRAP',
	SIGABRT = 'SIGABRT',
	SIGBUS = 'SIGBUS',
	SIGFPE = 'SIGFPE',
	SIGSEGV = 'SIGSEGV',
	SIGUSR2 = 'SIGUSR2',
	SIGTERM = 'SIGTERM',
}

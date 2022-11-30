import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
	collectCoverage: true,
    coverageReporters: [
        ['html', { subdir: 'html' }],
        'text-summary',
        'cobertura',
        'clover',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
export default config;

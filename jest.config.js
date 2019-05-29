module.exports = {
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: [
        'js',
        'json',
        'jsx',
        'node',
        'ts',
        'tsx',
    ],
    moduleDirectories: [
        'node_modules',
        '.',
    ],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
            diagnostics: {
                ignoreCodes: [2352],
            },
        },
    },
    preset: 'ts-jest',
    testMatch: null,
    setupFilesAfterEnv: [
    ],
};

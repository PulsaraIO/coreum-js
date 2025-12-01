# Tests

This directory contains tests for the coreum-js package.

## Test Structure

- `client/` - Tests for the Client class
  - `calculateGas.test.ts` - Tests for `calculateGas` and `getGasPrice` functions

## Running Tests

### Using ts-node (recommended)

```bash
npx ts-node tests/client/calculateGas.test.ts
```

### Using npm test

Update `package.json` to add a test script:

```json
{
  "scripts": {
    "test": "npx ts-node tests/client/calculateGas.test.ts",
    "test:all": "npx ts-node tests/**/*.test.ts"
  }
}
```

Then run:

```bash
npm test
```

## Test Framework

The tests are written to work without external test frameworks, using a simple test runner. However, you can easily migrate to Jest, Mocha, or another framework if desired.

## Excluded from Build

Tests are automatically excluded from the build process:
- `tsconfig.json` excludes `tests/**/*` and `**/*.test.ts`
- `tsconfig.module.json` excludes `tests/**/*` and `**/*.test.ts`
- Only files in `src/` are included in the build

## Writing New Tests

1. Create test files with `.test.ts` extension
2. Place them in the `tests/` directory
3. Use the test utilities from existing test files as a template
4. Tests will automatically be excluded from builds

## Notes

- Some tests require a live RPC connection to the blockchain
- Tests that require RPC will be skipped if the connection is unavailable
- Mock implementations can be added for unit testing without RPC

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['backend/__tests__/**/*.test.ts'],
    alias: {
      '@application': '/backend/src/application',
      '@domain': '/backend/src/domain',
      '@interfaces': '/backend/src/interfaces',
      '@infrastructure': '/backend/src/infrastructure',
    },
  },
});

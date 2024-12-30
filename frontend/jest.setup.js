require('@testing-library/jest-dom');

beforeAll(() => {
  const originalError = console.error;
  console.error = (...args) => {
    if (/ResizeObserver/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

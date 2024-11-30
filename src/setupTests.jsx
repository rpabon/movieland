import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock the Modal component
vi.mock('./components/Modal', () => ({
  Modal: ({ children }) => <div>{children}</div>,
}));

// Mock the usePagination hook
vi.mock('./hooks/usePagination', () => ({
  usePagination: () => ({ lastElementRef: null }),
}));

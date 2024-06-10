import { vi } from 'vitest';

// stub browser's API
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

const WindowMock = {
  // extend window mock here if you need more
  scrollTo: vi.fn(),
};

const LocalStorageMock = {
  setItem: vi.fn(),
  getItem: vi.fn(),
};

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
vi.stubGlobal('window', WindowMock);
vi.stubGlobal('localStorage', LocalStorageMock);
vi.stubGlobal('fetch', vi.fn());

import '@testing-library/jest-dom';
import 'intersection-observer';
import 'resize-observer-polyfill';
import { TextDecoder, TextEncoder } from 'util';

Object.assign(global, { TextEncoder, TextDecoder });

global.fetch = jest.fn(() => Promise.resolve(new Response(null, {
  status: 200,
  statusText: 'OK',
  headers: new Headers(),
})));

class ResizeObserver {
  observe() {
    return this;
  }

  unobserve() {
    return this;
  }

  disconnect() {
    return this;
  }
}

window.ResizeObserver = ResizeObserver;
global.ResizeObserver = ResizeObserver;

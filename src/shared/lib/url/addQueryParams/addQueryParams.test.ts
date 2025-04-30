import { getQueryParams } from './addQueryParams';

describe('shared/addQueryParams', () => {
  it('with one param', () => {
    const params = getQueryParams({ a: 'b' });

    expect(params).toBe('?a=b');
  });

  it('with multiple param', () => {
    const params = getQueryParams({ a: 'b', c: 'd' });

    expect(params).toBe('?a=b&c=d');
  });

  it('with undefined', () => {
    const params = getQueryParams({ a: 'b', c: undefined });

    expect(params).toBe('?a=b');
  });
});

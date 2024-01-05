import { isOdd } from './is-odd';

describe('tests for is-odd', () => {
  it('should be odd', () => {
    expect(isOdd(1)).toBeTruthy();
  });

  it('should not be odd', () => {
    expect(isOdd(2)).toBeFalsy();
  });
});

import { isEven } from './is-even';

describe('tests for is-even', () => {
  it('should be even', () => {
    expect(isEven(2)).toBeTruthy();
  });

  it('should not be even', () => {
    expect(isEven(1)).toBeFalsy();
  });
});

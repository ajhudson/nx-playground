import { isEven } from '@ajhudson/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}

import { Hello } from '@/hello'

describe('Hello', () => {
  it('should say hello', () => {
    expect(new Hello().perform()).toBe('Hello World')
  })
})

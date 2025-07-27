import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("should return true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("should return true for mixed-case palindrome words", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("should return false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("should throw an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar1")).toThrow("Only alphabetic characters are allowed");
  });

  it("should throw an error if input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
  });
});

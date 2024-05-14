import { expect, test } from '@jest/globals';
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './index.js';

test('capitalize first letter for normal English words', () => {
  const words = ['hello', 'test', 'divide'];
  const answers = ['Hello', 'Test', 'Divide'];

  words.forEach((word, index) => {
    expect(capitalize(word)).toBe(answers[index]);
  });
});

test('capitalize first letter with non-letter mixeds', () => {
  const words = ['asd4', '423sdg', '].vkkv', ''];
  const answers = ['Asd4', '423sdg', '].vkkv', ''];

  words.forEach((word, index) => expect(capitalize(word)).toBe(answers[index]));
});

test('capitalize sentence', () => {
  const sentence = 'how are you today?';
  const answer = 'How are you today?';

  expect(capitalize(sentence)).toBe(answer);
});

test('reverse string', () => {
  const strings = [
    'hi',
    'bye',
    'whatever',
    '',
    'i',
    'Hello',
    'What is going on?',
    '$#!@',
  ];
  const answers = [
    'ih',
    'eyb',
    'revetahw',
    '',
    'i',
    'olleH',
    '?no gniog si tahW',
    '@!#$',
  ];

  strings.forEach((str, index) => {
    expect(reverseString(str)).toBe(answers[index]);
  });
});

test('add in calculator', () => {
  const calc = calculator();
  expect(calc.add(2, 1)).toBe(3);
  expect(calc.add(4, 6)).toBe(10);
  expect(() => calc.add('asd', 'vwwef')).toThrow(Error);
  expect(() => calc.add('', '')).toThrow(Error);
  expect(() => calc.add('123', '!@%')).toThrow(Error);
});

test('subtract in calculator', () => {
  const calc = calculator();

  expect(calc.subtract(3, 1)).toBe(2);
  expect(calc.subtract(-10, -3.734)).toBeCloseTo(-6.266);
  expect(() => calc.subtract('asidQ!u', '234')).toThrow(Error);
  expect(() => calc.subtract('', '')).toThrow(Error);
});

test('multiply in calculator', () => {
  const calc = calculator();

  expect(calc.multiply(20, 4)).toBe(80);
  expect(calc.multiply('12', 4)).toBe(48);
  expect(() => calc.multiply('fa1', '4')).toThrow(Error);
  expect(calc.multiply(Infinity, 4)).toBe(Infinity);
});

test('division in calculator', () => {
  const calc = calculator();

  expect(calc.divide(10, 2)).toBe(5);
  expect(calc.divide(10, 3)).toBeCloseTo(3.33, 2);
  expect(() => calc.divide(123, 0)).toThrow(Error);
  expect(calc.divide(123, Infinity)).toBe(0);
  expect(() => calc.divide('asidub', 123)).toThrow(Error);
});

test('caesarCipher to shift character', () => {
  expect(caesarCipher('what', 2)).toBe('yjcv');
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 5)).toBe(
    'fghijklmnopqrstuvwxyzabcde'
  );
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', -20)).toBe(
    'ghijklmnopqrstuvwxyzabcdef'
  );
  expect(caesarCipher('How are you?', 2)).toBe('Jqy ctg aqw?');
  expect(caesarCipher('SIDJFBD@#F346 WOFFISDFQ ADFJSDF', 47)).toBe(
    'NDYEAWY@#A346 RJAADNYAL VYAENYA'
  );
  expect(caesarCipher('', 23)).toBe('');
});

test('array', () => {
  const testArray1 = [1, 8, 3, 4, 2, 6];
  const testArray2 = ['sdfsd', 'asd', '123', 123];

  expect(analyzeArray(testArray1).average).toBe(4);
  expect(() => analyzeArray(testArray2).average).toThrow(Error);
  expect(analyzeArray(testArray1).min).toBe(1);
  expect(analyzeArray(testArray1).length).toBe(6);
  expect(() => analyzeArray([]).average).toThrow(Error);
});

import { expect, test } from '@jest/globals';
import { capitalize } from './index.js';

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

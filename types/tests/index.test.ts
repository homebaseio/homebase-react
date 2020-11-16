import { HomebaseProvider, useTransact, useEntity } from '../../dist/js/homebase.react';
import { renderHook, act } from '@testing-library/react-hooks'

test('HomebaseProvider types', () => {
  const provider = HomebaseProvider({});
  expect(typeof provider === "object").toBe(true);

  expect(() => HomebaseProvider('failme')).toThrow(TypeError);
  expect(() => HomebaseProvider(5)).toThrow(TypeError);

  // Arrays are objects in js. Unsure if we should just allow them or??
  //expect(() => HomebaseProvider([])).toThrow(TypeError);

});

test('useQuery types', () => {
//TODO
});

test('useEntity types', () => {
//TODO
});

test('useTransact types', () => {
//TODO
});

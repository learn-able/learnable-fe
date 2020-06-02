import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

const fakeQuery = 'test';
const fakeURL = `https://fakeurl.com`;
const fakeResponse = 'fake response';

const mockFetchSuccessCase = () =>
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(fakeResponse),
    })
  );

const mockFetchFailureCase = () =>
  jest.fn().mockImplementation(() => Promise.reject(Error('Failed to fetch.')));

const mockFetchResponseNotOKCase = () =>
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: false,
      message: 'Something went wrong.',
    })
  );

test('it calls fetch with correct url', () => {
  window.fetch = mockFetchSuccessCase();
  const { result } = renderHook(() => useFetch(fakeQuery));
  const httpAbortCtrl = new AbortController();

  act(() => {
    result.current.sendRequest(fakeURL);
    result.current.setIsLoading(false);
  });

  expect(window.fetch).toHaveBeenCalledTimes(1);
  expect(window.fetch).toHaveBeenCalledWith(fakeURL, {
    body: null,
    headers: {},
    method: 'GET',
    signal: httpAbortCtrl.signal,
  });
});

test('it calls fetch with various arguments', () => {
  window.fetch = mockFetchSuccessCase();
  const { result } = renderHook(() => useFetch(fakeQuery));
  const httpAbortCtrl = new AbortController();

  act(() => {
    result.current.sendRequest(
      fakeURL,
      'POST',
      JSON.stringify({ fake: 'data' }),
      { 'Content-Type': 'application/json' }
    );
    result.current.setIsLoading(false);
  });

  expect(window.fetch).toHaveBeenCalledTimes(1);
  expect(window.fetch).toHaveBeenCalledWith(fakeURL, {
    body: JSON.stringify({ fake: 'data' }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    signal: httpAbortCtrl.signal,
  });
});

// test('it throws when response not ok', () => {
//   window.fetch = mockFetchResponseNotOKCase();
//   const { result } = renderHook(() => useFetch(fakeQuery));

//   act(() => {
//     result.current.sendRequest(fakeURL);
//     const err = new Error('Something went wrong.');
//     result.current.setError(err);
//     result.current.setIsLoading(false);
//   });

//   expect(window.fetch).toHaveBeenCalledTimes(1);
// });

// test('it throws when failing to fetch', () => {
//   window.fetch = mockFetchFailureCase();
//   const { result } = renderHook(() => useFetch(fakeQuery));

//   act(() => {
//     result.current.sendRequest(fakeURL);
//     result.current.setError(Error('Failed to fetch.'));
//     result.current.setIsLoading(false);
//   });

//   expect(window.fetch).toHaveBeenCalledTimes(1);
//   expect(window.fetch).rejects.toEqual(Error(`Failed to fetch.`));
// });

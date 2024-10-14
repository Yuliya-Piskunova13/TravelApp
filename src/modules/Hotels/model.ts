import { createEffect, createStore } from 'effector';

import { Hotel } from './types';
import { HOTELS } from './data';

// Эффект для загрузки данных
export const fetchHotelsFx = createEffect<void, Hotel[], Error>(async () => {
  return new Promise<Hotel[]>(resolve => {
    setTimeout(() => {
      resolve(HOTELS);
    }, 2000); // задержка в 2 секунды
  });
});

export const $loading = createStore(false).on(
  fetchHotelsFx.pending,
  (_, pending) => pending,
);

export const $error = createStore<Error | null>(null).on(
  fetchHotelsFx.failData,
  (_, error) => error,
);

export const $hotels = createStore<Hotel[]>([]).on(
  fetchHotelsFx.doneData,
  (_, hotels) => hotels,
);

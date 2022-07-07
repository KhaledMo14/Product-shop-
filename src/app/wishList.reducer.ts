import { createReducer, on } from '@ngrx/store';
import { addWish , removeWish } from './wishList.actions';

export let initial: Array<any> = [];


export const reducer = createReducer(
  initial,
  
  on(addWish, (state , {cardItem}) => {
    let check = state.filter((e) => e.id == cardItem.id);
    if (check.length != 0) {
      return [...state];
    } else {
      return [...state, cardItem];
    }
  }),

  on(removeWish, (state, { cardItem }) => {
    state = state.filter((e) => e.id != cardItem.id);
    return state;
  })
);
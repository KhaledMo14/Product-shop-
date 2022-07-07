import { createAction , props} from '@ngrx/store';

export const addWish = createAction (
    '[wishLish Component] Add wishLish', 
    props<{cardItem:any}>()
);

export const removeWish = createAction (
    '[wishList Component]  remove wishList', 
    props<{cardItem:any}>()
)


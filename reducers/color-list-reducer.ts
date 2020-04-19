import { IColorPayload, IgetColorListAction } from '../reducers-types/color-list-types';
import { GET_COLOR_LIST } from '../actions/color-list-actions';

// change it to Immutable JS
const initialState: IColorPayload = {
  title: '',
  itemsList: [],
};

export const colorList = (
  state: IColorPayload = initialState,
  action: IgetColorListAction,
): IColorPayload => {
  if (action.type === GET_COLOR_LIST) {
    return action.payload;
  }

  return state;
};

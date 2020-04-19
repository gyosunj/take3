import { Dispatch } from 'redux';
import * as superagent from 'superagent';

import { IColorPayload, IgetColorListAction } from '../reducers-types/color-list-types';

export const GET_COLOR_LIST = 'GET_COLOR_LIST';

export const getColorList: (payload: IColorPayload) => IgetColorListAction = (
  payload: IColorPayload,
): IgetColorListAction => ({ type: GET_COLOR_LIST, payload });

export const fetchColorList = () => {
  return (dispatch: Dispatch<IgetColorListAction>): void =>
    superagent.get('/api/color-list').end((err, res) => {
      return dispatch(getColorList(err || !res || !res.body ? {} : res.body));
    });
};

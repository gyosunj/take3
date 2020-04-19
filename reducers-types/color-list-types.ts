export interface IColorRecord {
  id: string;
  color: string;
}

export interface IColorPayload {
  title: string;
  itemsList: IColorRecord[];
}

export interface IgetColorListAction {
  type: string;
  payload: IColorPayload;
}
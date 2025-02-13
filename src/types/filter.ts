import { ITag } from './item';

export type IBy = 'name' | 'shop' | 'date';
export type IOrder = 'asc' | 'desc';

interface ISort {
  by: IBy;
  order: IOrder;
}

export interface IFilter {
  search: string;
  tags: ITag[];
  sort: ISort;
  showExpired: boolean;
}

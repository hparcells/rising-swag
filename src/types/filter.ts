import { ITag } from './item';

export type IBy = 'name' | 'shop' | 'added';
export type IOrder = 'ascending' | 'descending';

interface ISort {
  by: IBy;
  order: IOrder;
}

export interface IFilter {
  search: string;
  tags: ITag[];
  sort: ISort;
  showExpired: boolean;
  fullWidth: boolean;
}

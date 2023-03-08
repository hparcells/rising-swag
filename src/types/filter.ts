import { ITag } from './item';

type Sort = 'name' | 'shop' | 'added';
type Order = 'ascending' | 'descending';

interface ISort {
  by: Sort;
  order: Order;
}

export interface IFilter {
  search: string;
  tags: ITag[];
  sort: ISort;
}

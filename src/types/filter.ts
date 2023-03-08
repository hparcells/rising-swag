import { ITag } from './item';

type Sort = 'name' | 'shop' | 'price' | 'added';
type Order = 'ascending' | 'descending';

interface ISort {
  sort: Sort;
  order: Order;
}

export interface IFilter {
  search: string;
  tags: ITag[];
  sort: ISort;
}

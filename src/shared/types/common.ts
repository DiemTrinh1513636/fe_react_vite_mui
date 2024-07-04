export type Pagination<T> = {
  items: T[];
  page: number;
  limit: number;
  total: number;
};

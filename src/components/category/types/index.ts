import { TCategoryWithDepth } from '@root/services/be/types/category';

export type NestedCategoryFromDepthItemProps = {
  data: NestedCategoryFromDepthData;
  nextRow: TCategoryWithDepth | undefined;
  selected: boolean;
  handleCollapse: (path: string, open: boolean) => void;
};

export type NestedCategoryFromDepthData = TCategoryWithDepth & {
  display: boolean;
  open: boolean;
};

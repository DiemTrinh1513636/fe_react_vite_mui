import { TCategoryWithDepthPath } from '@root/services/be/types/category';

export type NestedCategoryFromDepthItemProps = {
  data: NestedCategoryFromDepthData;
  nextRow: TCategoryWithDepthPath | undefined;
  selected: boolean;
  handleCollapse: (path: string, open: boolean) => void;
};

export type NestedCategoryFromDepthData = TCategoryWithDepthPath & {
  display: boolean;
  open: boolean;
};

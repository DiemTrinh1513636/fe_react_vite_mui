export type CategoryBase = {
  id: number;
  title: string;
  slug: string;
};
export type TCategory = CategoryBase & {
  createdAt: Date;
  updatedAt: Date;
  createdBy: {
    id: number;
    name: string;
    roleName: string;
  };
  updatedBy: {
    id: number;
    name: string;
    roleName: string;
  };
};

export type TCategoryNested = CategoryBase & {
  children: TCategoryNested[];
};

export type TCategoryWithParentId = CategoryBase & {
  left: number;
  right: number;
  parentId: number | null;
};

export type TCategoryWithDepthPath = CategoryBase & {
  depth: number;
  path: string;
};

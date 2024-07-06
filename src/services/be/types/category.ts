export type TCategoryWithParentId = {
  id: number;
  title: string;
  left: number;
  right: number;
  parentId: number | null;
};

export type TCategory = {
  id: number;
  title: string;
  slug: string;
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

export type TCategoryWithDepth = {
  id: number;
  title: string;
  parentId: number | null;
  depth: number;
  path: string;
};

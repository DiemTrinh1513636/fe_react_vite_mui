import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { CategoryService } from '@root/services';
import { TCategoryWithParentId } from '@root/services/be/types/category';
import { useEffect, useState } from 'react';

export const NestedCategoryFromFlatParentId = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [categoryData, setCategoryData] = useState<TCategoryWithParentId[]>([]);

  useEffect(() => {
    const getCategoryData = async () => {
      const categoryService = new CategoryService();
      const data = await categoryService.getFlatCategoryWithParentId();
      setCategoryData(data);
    };
    getCategoryData();
  }, []);

  const handleExpandedItemsChange = (
    event: React.SyntheticEvent,
    itemIds: string[],
  ) => {
    setExpandedItems(itemIds);
  };

  const mapping = new Map<number | null, TCategoryWithParentId[]>();
  categoryData.forEach((item) => {
    if (!mapping.get(item.parentId)) {
      mapping.set(item.parentId, []);
    }
    mapping.get(item.parentId)?.push(item);
  });

  const buildTreeRecursive = (parentId: number | null) => {
    const nodes = mapping.get(parentId);
    if (!nodes || nodes.length === 0) return;

    return nodes.map((node) => {
      const id = node?.id?.toString();
      const title = `${node.title}(${node.id})`;
      const children = buildTreeRecursive(node.id);
      return (
        <TreeItem key={id} itemId={id ?? ''} label={title}>
          {children}
        </TreeItem>
      );
    });
  };

  return (
    <Stack spacing={2}>
      <Box sx={{ minHeight: 352, minWidth: 250 }}>
        <SimpleTreeView
          expandedItems={expandedItems}
          onExpandedItemsChange={handleExpandedItemsChange}
        >
          {buildTreeRecursive(null)}
        </SimpleTreeView>
      </Box>
    </Stack>
  );
};

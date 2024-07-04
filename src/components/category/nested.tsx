import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { CategoryService } from '@root/services';
import { TCategoryWithParentId } from '@root/shared/types/category';
import { useEffect, useState } from 'react';

export const NestedCategory = () => {
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

  const buildTreeRecursive = (parentId: number | null) => {
    const nodes = categoryData.filter((n) => n.parentId === parentId);
    if (nodes.length === 0) return;

    return nodes.map((node) => {
      const id = node?.id?.toString();
      const title = `${node.left} - ${node.title} (${node.id}) - ${node.right}`;
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

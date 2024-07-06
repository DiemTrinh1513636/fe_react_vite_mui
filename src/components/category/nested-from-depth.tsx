import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
  NestedCategoryFromDepthData,
  NestedCategoryFromDepthItemProps,
} from '@root/components/category/types';
import { CategoryService } from '@root/services/be';
import { useEffect, useState } from 'react';

const space = 30;
const INIT_MAX_DEPTH_DISPLAYED = 2;

export const NestedCategoryFromDepthItem = ({
  data,
  nextRow,
  selected,
  handleCollapse,
}: NestedCategoryFromDepthItemProps) => {
  const [open, setOpen] = useState<boolean>(data.open);
  const handleClick = () => {
    setOpen(!open);
    handleCollapse(data.path, !open);
  };
  const hasChildren = nextRow && nextRow.depth > data.depth;
  return (
    <div style={{ paddingLeft: space * (data.depth - 1) }}>
      <Collapse in={data.display}>
        <ListItemButton onClick={handleClick} selected={selected}>
          <ListItemText primary={`[${data.id}] ${data.title}`} />
          {hasChildren ? open ? <ExpandLess /> : <ExpandMore /> : <></>}
        </ListItemButton>
      </Collapse>
    </div>
  );
};

export const NestedCategoryFromDepth = () => {
  const [categoryData, setCategoryData] = useState<
    NestedCategoryFromDepthData[]
  >([]);
  const [selected, setSelected] = useState<string>('');

  const handleCollapse = (path: string, willOpen: boolean) => {
    setSelected(path);
    const newData = categoryData.map((item) => {
      const isChildren = item.path.startsWith(`${path}_`);
      const regexp = new RegExp(`^${path}_\\d+$`);
      const isNearestChildren = regexp.test(item.path);

      const [display, open] = (() => {
        if (!isChildren) return [item.display, item.open];
        if (!willOpen) return [false, false];
        return [isNearestChildren, false];
      })();

      return { ...item, display, open };
    });
    setCategoryData(newData);
  };

  useEffect(() => {
    const getCategoryData = async () => {
      const categoryService = new CategoryService();
      const response = await categoryService.getFlatCategoryWithDepth();
      const data = response.map((item) => ({
        ...item,
        display: item.depth <= INIT_MAX_DEPTH_DISPLAYED,
        open: item.depth < INIT_MAX_DEPTH_DISPLAYED,
      }));
      setCategoryData(data);
    };
    getCategoryData();
  }, []);

  return (
    <Stack spacing={2}>
      <Box sx={{ minHeight: 352, minWidth: 250 }}>
        {categoryData.map((item, idx) => (
          <NestedCategoryFromDepthItem
            key={item.id}
            data={item}
            nextRow={
              idx < categoryData.length ? categoryData[idx + 1] : undefined
            }
            selected={selected === item.path}
            handleCollapse={handleCollapse}
          />
        ))}
      </Box>
    </Stack>
  );
};

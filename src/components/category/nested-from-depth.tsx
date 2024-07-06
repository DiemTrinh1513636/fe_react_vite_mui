import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
  NestedCategoryFromDepthData,
  NestedCategoryFromDepthItemProps,
} from '@root/components/category/types';
import { TCategoryWithDepth } from '@root/services/be/types/category';
import { useState } from 'react';

const mockData: TCategoryWithDepth[] = [
  {
    id: 1,
    title: 'Level 1 - Node 1',
    parentId: null,
    depth: 1,
    path: '1',
  },
  {
    id: 2,
    title: 'Level 2 - Node 1',
    parentId: 1,
    depth: 2,
    path: '1_2',
  },
  {
    id: 4,
    title: 'Level 3 - Node 1',
    parentId: 2,
    depth: 3,
    path: '1_2_4',
  },
  {
    id: 7,
    title: 'Level 4 - Node 1',
    parentId: 4,
    depth: 4,
    path: '1_2_4_7',
  },
  {
    id: 13,
    title: 'Level 5 - Node 1',
    parentId: 7,
    depth: 5,
    path: '1_2_4_7_13',
  },
  {
    id: 20,
    title: 'Level 6 - Node 1',
    parentId: 13,
    depth: 6,
    path: '1_2_4_7_13_20',
  },
  {
    id: 8,
    title: 'Level 4 - Node 2',
    parentId: 4,
    depth: 4,
    path: '1_2_4_8',
  },
  {
    id: 14,
    title: 'Level 5 - Node 2',
    parentId: 8,
    depth: 5,
    path: '1_2_4_8_14',
  },
  {
    id: 21,
    title: 'Level 6 - Node 2',
    parentId: 14,
    depth: 6,
    path: '1_2_4_8_14_21',
  },
  {
    id: 15,
    title: 'Level 5 - Node 3',
    parentId: 8,
    depth: 5,
    path: '1_2_4_8_15',
  },
  {
    id: 22,
    title: 'Level 6 - Node 3',
    parentId: 15,
    depth: 6,
    path: '1_2_4_8_15_22',
  },
  {
    id: 5,
    title: 'Level 3 - Node 2',
    parentId: 2,
    depth: 3,
    path: '1_2_5',
  },
  {
    id: 9,
    title: 'Level 4 - Node 3',
    parentId: 5,
    depth: 4,
    path: '1_2_5_9',
  },
  {
    id: 16,
    title: 'Level 5 - Node 4',
    parentId: 9,
    depth: 5,
    path: '1_2_5_9_16',
  },
  {
    id: 23,
    title: 'Level 6 - Node 4',
    parentId: 16,
    depth: 6,
    path: '1_2_5_9_16_23',
  },
  {
    id: 10,
    title: 'Level 4 - Node 4',
    parentId: 5,
    depth: 4,
    path: '1_2_5_10',
  },
  {
    id: 17,
    title: 'Level 5 - Node 5',
    parentId: 10,
    depth: 5,
    path: '1_2_5_10_17',
  },
  {
    id: 24,
    title: 'Level 6 - Node 5',
    parentId: 17,
    depth: 6,
    path: '1_2_5_10_17_24',
  },
  {
    id: 3,
    title: 'Level 2 - Node 2',
    parentId: 1,
    depth: 2,
    path: '1_3',
  },
  {
    id: 6,
    title: 'Level 3 - Node 3',
    parentId: 3,
    depth: 3,
    path: '1_3_6',
  },
  {
    id: 11,
    title: 'Level 4 - Node 5',
    parentId: 6,
    depth: 4,
    path: '1_3_6_11',
  },
  {
    id: 18,
    title: 'Level 5 - Node 6',
    parentId: 11,
    depth: 5,
    path: '1_3_6_11_18',
  },
  {
    id: 25,
    title: 'Level 6 - Node 6',
    parentId: 18,
    depth: 6,
    path: '1_3_6_11_18_25',
  },
  {
    id: 12,
    title: 'Level 4 - Node 6',
    parentId: 6,
    depth: 4,
    path: '1_3_6_12',
  },
  {
    id: 30,
    title: 'Level 6 - Node 11',
    parentId: 3,
    depth: 3,
    path: '1_3_30',
  },
  {
    id: 29,
    title: 'Level 6 - Node 10',
    parentId: 30,
    depth: 4,
    path: '1_3_30_29',
  },
  {
    id: 19,
    title: 'Level 5 - Node 7',
    parentId: 29,
    depth: 5,
    path: '1_3_30_29_19',
  },
  {
    id: 26,
    title: 'Level 6 - Node 7',
    parentId: 19,
    depth: 6,
    path: '1_3_30_29_19_26',
  },
  {
    id: 27,
    title: 'Level 6 - Node 8',
    parentId: 19,
    depth: 6,
    path: '1_3_30_29_19_27',
  },
  {
    id: 28,
    title: 'Level 6 - Node 9',
    parentId: 19,
    depth: 6,
    path: '1_3_30_29_19_28',
  },
];
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
  const initial = mockData.map((item) => ({
    ...item,
    display: item.depth <= INIT_MAX_DEPTH_DISPLAYED,
    open: item.depth < INIT_MAX_DEPTH_DISPLAYED,
  }));
  const [categoryData, setCategoryData] =
    useState<NestedCategoryFromDepthData[]>(initial);
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

  // useEffect(() => {
  // 	const getCategoryData = async () => {
  // 		const categoryService = new CategoryService();
  // 		const data = await categoryService.getFlatCategoryWithDepth();
  // 		setCategoryData(data);
  // 	};
  // 	getCategoryData();
  // }, []);

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

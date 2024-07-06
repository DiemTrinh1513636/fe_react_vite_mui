import { Box, Tab, Tabs } from '@mui/material';
import { CategoryList } from '@root/components/category/list';
import { NestedCategory } from '@root/components/category/nested';
import { NestedCategoryFromDepth } from '@root/components/category/nested-from-depth';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Category = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="List category" {...a11yProps(0)} />
          <Tab label="Nested category" {...a11yProps(1)} />
          <Tab label="Nested category from depth" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CategoryList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <NestedCategory />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <NestedCategoryFromDepth />
      </CustomTabPanel>
    </>
  );
};

export default Category;

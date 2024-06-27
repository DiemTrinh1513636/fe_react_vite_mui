import { Table } from '@mui/material';
import { CategoryService } from '@root/services';
import { useEffect, useState } from 'react';

export const CategoryList = async () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const categoryService = new CategoryService();
    const data = await categoryService.getFlatCategory();
    setList(data);
  }, []);
  return <Table></Table>;
};

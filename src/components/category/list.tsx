import { Table, TableCell, TableHead, TableRow } from '@mui/material';
import { CategoryService } from '@root/services/be';
import { TCategory } from '@root/shared/types/category';
import { Pagination } from '@root/shared/types/common';
import { useEffect, useState } from 'react';

export const CategoryList = () => {
  const initData = { items: [], page: 1, total: 0, limit: 10 };
  const [categoryData, setCategoryData] =
    useState<Pagination<TCategory>>(initData);
  const [list, setList] = useState<TCategory[]>([]);

  useEffect(() => {
    const getCategoryData = async () => {
      const categoryService = new CategoryService();
      const data = await categoryService.getFlatCategory({
        page: 1,
        limit: 10,
      });
      data.items;
      setCategoryData(data);
      setList(data.items);
    };
    getCategoryData();
  }, []);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="right">Id</TableCell>
          <TableCell align="right">Title</TableCell>
          <TableCell align="right">Slug</TableCell>
          <TableCell align="right">Created Date</TableCell>
          <TableCell align="right">Updated Date</TableCell>
          <TableCell align="right">Created By</TableCell>
          <TableCell align="right">Updated By</TableCell>
        </TableRow>
      </TableHead>
      {list.map((item, idx) => (
        <TableRow key={idx}>
          <TableCell align="right">{item.id}</TableCell>
          <TableCell align="right">{item.title}</TableCell>
          <TableCell align="right">{item.slug}</TableCell>
          <TableCell align="right">
            {item.createdAt?.toISOString() ?? '-'}
          </TableCell>
          <TableCell align="right">
            {item.updatedAt?.toISOString() ?? '-'}
          </TableCell>
          <TableCell align="right">{item.createdBy?.name}</TableCell>
          <TableCell align="right">{item.updatedBy?.name}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
};

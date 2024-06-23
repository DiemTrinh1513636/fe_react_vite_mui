import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CategoryIcon from '@mui/icons-material/Category';
import { IMenuItem } from '@root/shared/types';

export const menuData: IMenuItem[] = [
  {
    title: 'Category',
    url: '/category',
    icon: <CategoryIcon />,
  },
  {
    title: 'Accessibility',
    url: '/accessibility',
    icon: <AccessibilityIcon />,
  },
];

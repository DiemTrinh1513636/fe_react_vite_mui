import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import TagIcon from '@mui/icons-material/Tag';
import SearchIcon from '@mui/icons-material/Search';
import CampaignIcon from '@mui/icons-material/Campaign';
import DevicesIcon from '@mui/icons-material/Devices';
import CategoryIcon from '@mui/icons-material/Category';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import { IMenuItem } from '@root/shared/types';

export const menuData: (IMenuItem | null)[] = [
  {
    title: 'Timeline',
    url: '/timeline',
    icon: <HomeIcon />,
  },
  {
    title: 'Category',
    url: '/category',
    icon: <CategoryIcon />,
  },
  {
    title: 'Notification',
    url: '/notification',
    icon: <NotificationsNoneIcon />,
  },
  {
    title: 'Clip',
    url: '/clip',
    icon: <AttachFileIcon />,
  },
  {
    title: 'Drive',
    url: '/drive',
    icon: <CloudCircleIcon />,
  },
  null,
  {
    title: 'Explore',
    url: '/explore',
    icon: <TagIcon />,
  },
  {
    title: 'Announcements',
    url: '/announcements',
    icon: <CampaignIcon />,
  },
  {
    title: 'Search',
    url: '/search',
    icon: <SearchIcon />,
  },
  null,
  {
    title: 'Switch UI',
    url: '/switch-ui',
    icon: <DevicesIcon />,
  },
  null,
  {
    title: 'Control Panel',
    url: '/admin',
    icon: <NotificationsNoneIcon />,
  },
  {
    title: 'More!',
    url: '/more',
    icon: <AppsIcon />,
  },
  {
    title: 'Setting',
    url: '/setting',
    icon: <SettingsIcon />,
  },
];

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { menuData } from './menu';

interface SideBarProps {
  drawerWidth: number;
  open: boolean;
  handleDrawerClose: () => void;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'center',
  backgroundColor: 'blue',
  color: 'white',
}));

const selectedStyle = {
  color: 'white',
  backgroundColor: '#86b300',
  borderRadius: '50px',
};

const SideBar = ({ drawerWidth, open, handleDrawerClose }: SideBarProps) => {
  const location = useLocation();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader
        style={{ backgroundColor: 'white' }}
        onClick={handleDrawerClose}
      >
        <IconButton>
          <img src="/src/assets/favicon.png" width={30} height={30} />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List style={{ margin: '0px 10px' }}>
        {menuData.map((menu, index) => {
          if (menu === null)
            return (
              <div key={index} style={{ margin: '10px 0px' }}>
                <Divider key={index} />
              </div>
            );
          const { title, icon, url } = menu;
          return (
            <ListItem
              disablePadding
              key={title}
              style={
                location.pathname === '/' + title.toLowerCase()
                  ? selectedStyle
                  : {}
              }
              onClick={() => (window.location.href = url)}
            >
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SideBar;

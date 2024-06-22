import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

interface HeaderProps {
	open: boolean;
	drawerWidth: number;
	handleDrawerOpen: () => void;
}

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
	drawerWidth: number
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Header = ({ open, handleDrawerOpen, drawerWidth }: HeaderProps) => {
	return <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
		<Toolbar>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				onClick={handleDrawerOpen}
				edge="start"
				sx={{ mr: 2, ...(open && { display: 'none' }) }}
			>
				<MenuIcon />
			</IconButton>
			
		</Toolbar>
	</AppBar>

}

export default Header
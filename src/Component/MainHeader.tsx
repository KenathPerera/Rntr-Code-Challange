import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { alpha, Badge, Container, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@material-ui/styles";
import NotificationsIcon from '@mui/icons-material/Notifications';

import MailIcon from '@mui/icons-material/Mail';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HomeWorkIcon from '@mui/icons-material/HomeWork';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '80%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '95ch',
        },
    },
}));

const useStyles = makeStyles({
    appBarContent: {
        backgroundColor: '#fff !important',
        color: '#000 !important',
        boxShadow: 'none !important'

    },
    toolbarContent: {
        justifyContent: 'center',
        padding:'0 !important'  
    },
    profilePic: {
        margin: '0vh',
        display: 'flex',
        alignContent: 'flex-end'
    },
    avatarText: {
        marginLeft: '3vh'
    },
    ideaBookDiv: {
        marginTop: '3vh'
    },
    ideaBooktext: {
        marginTop: '5vh'
    },
    listItemBg: {
        backgroundColor: '#e1e1e1 !important',
        marginTop: '2vh'
    },
    iconButtonColor:{
        backgroundColor:'transparent !important' 
    }

}
);



function MainHeader() {

    const classes = useStyles();

    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
        console.log(anchorElNav)
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
        console.log(Boolean(anchorElUser))
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            <Container sx={{ mt: '5vh' }}>
                <AppBar position="static" className={classes.appBarContent}>
                    <Toolbar className={classes.toolbarContent}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2}}
                            className={classes.iconButtonColor}
                        >
                            <HomeWorkIcon />
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,ml:'2vh'}}>
                                HUOZZ
                            </Typography>
                        </IconButton>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search Photoes Pros and More.."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit" className={classes.iconButtonColor}>
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                className={classes.iconButtonColor}
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>

                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={handleOpenUserMenu}
                                className={classes.iconButtonColor}
                            >
                                <AccountCircle />
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,ml:'1vh'}}>
                                    Your Houzz
                                </Typography>
                            </IconButton>

                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
                <AppBar position="static" className={classes.appBarContent}>
                    <Box>
                        <Toolbar className={classes.toolbarContent}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                className={classes.iconButtonColor}
                            >
                                <PhotoCameraIcon />
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: '10vh' , ml:'3vh'}}>
                                    Photos
                                </Typography>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                className={classes.iconButtonColor}
                            >
                                <AccountBoxIcon />
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: '10vh' , ml:'3vh'}}>
                                    Find Professionals
                                </Typography>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                className={classes.iconButtonColor}
                            >
                                <AutoStoriesIcon />
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: '10vh', ml:'3vh' }}>
                                    Stories
                                </Typography>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                className={classes.iconButtonColor}
                            >
                                <LightbulbIcon />
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 , ml:'3vh'}}>
                                    Advice
                                </Typography>
                            </IconButton>
                        </Toolbar>
                    </Box>
                </AppBar></Container>
        </div>
    );

}

export default MainHeader


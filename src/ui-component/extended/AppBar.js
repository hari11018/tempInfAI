import PropTypes from 'prop-types';
import { cloneElement, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger
} from '@mui/material';

// project imports
import Logo from 'ui-component/Logo';

// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';

// elevation scroll
function ElevationScroll({ children, window }) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return cloneElement(children, {
        elevation: trigger ? 1 : 0,
        style: {
            backgroundColor: theme.palette.mode === 'dark' && trigger ? theme.palette.dark[800] : theme.palette.background.default,
            color: theme.palette.text.dark
        }
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node,
    window: PropTypes.object
};

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = useState(false);

    const drawerToggler = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar>
                <Container>
                    <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
                        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            <Logo />
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={{ xs: 1.5, md: 2.5 }}>
                            <Button color="inherit" href="#influenceAI">
                                Our Services
                            </Button>
                            <Button color="inherit" href="#aboutUS">
                                About Us
                            </Button>
                            <Button color="inherit" href="#forInfluencers">
                                For Influencers
                            </Button>
                            <Button color="inherit" href="#forBrands">
                                For Brands
                            </Button>
                            {/* <Button color="inherit" href="#infAIResources">
                                Resources
                            </Button> */}
                            <Button href="#contactUS" disableElevation variant="contained" color="secondary">
                                Contact Us
                            </Button>
                        </Stack>
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                {drawerToggle && (
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={drawerToggler(false)}
                                        onKeyDown={drawerToggler(false)}
                                    >
                                        <List>
                                            <Link style={{ textDecoration: 'none' }} href="#findInfluencers" target="_self">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconHome2 />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Find Influencers" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#aboutUS" target="_self">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconDashboard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="About Us" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#forInfluencers" target="_self">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconBook />
                                                    </ListItemIcon>
                                                    <ListItemText primary="For Influencers" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#forBrands" target="_self">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCreditCard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="For Brands" />
                                                </ListItemButton>
                                            </Link>
                                            {/* <Link style={{ textDecoration: 'none' }} href="#infAIResources" target="_self">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCreditCard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Resources" />
                                                </ListItemButton>
                                            </Link> */}
                                            <Link style={{ textDecoration: 'none' }} href="#contactUS" target="_self">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCreditCard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Contact Us" />
                                                </ListItemButton>
                                            </Link>
                                        </List>
                                    </Box>
                                )}
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;

import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBarSearchComponent from '../appbar/appbar.component';
import { Outlet, useNavigate } from 'react-router-dom';
import { colors, CssBaseline, Divider, Grid, styled, Tooltip, Typography } from '@mui/material';
import { MenuLinkList } from './constants/menuslink';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState<boolean>(false);
  const navigateOn = useNavigate();

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setState(open);
      };

  const list = () => (
    <Box
      sx={{ width: 230 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
        <CssBaseline />
      <DrawerHeader>
        {state ? <Typography style={{ textAlign: 'center', width: '100%' }} variant='h6' component={'span'} >
          Major Village
        </Typography> : null}
      </DrawerHeader>
      <Divider />
      <List>
        {MenuLinkList.map((menu, index) => (
          <ListItem key={menu.name + index} disablePadding sx={{ display: 'block', }}>
            <Tooltip title={menu.name} placement='right'>
              <ListItemButton
                onClick={() => { navigateOn(menu.route) }}
                sx={{
                  minHeight: 48,
                  justifyContent: state ? 'initial' : 'center',
                  px: 2.5,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: state ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.name} sx={{ opacity: state ? 1 : 0, color: colors.grey[800] }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <AppBarSearchComponent drawerWidth={230} onClick={toggleDrawer(!state)} open={state} />
      <SwipeableDrawer
        anchor={'left'}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        {list()}
      </SwipeableDrawer>
      <Grid container style={{ marginTop: 65, backgroundColor: 'var(--background)' }} spacing={0}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <Outlet />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
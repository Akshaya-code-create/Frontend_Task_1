// src/App.jsx
import * as React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import {
  AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItemButton,
  ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';

import AdminPage from './roles/AdminPage.jsx';
import DeptHeadPage from './roles/DeptHeadPage.jsx';
import TeacherPage from './roles/TeacherPage.jsx';
import NonTeachingPage from './roles/NonTeachingPage.jsx';
import StudentPage from './roles/StudentPage.jsx';
import SecurityPage from './roles/SecurityPage.jsx';
import ReceptionPage from './roles/ReceptionPage.jsx';

const drawerWidth = 260;

const navItems = [
  { label: 'Administration Admin', path: '/admin', icon: <SettingsIcon /> },
  { label: 'Department Head', path: '/dept-head', icon: <PeopleIcon /> },
  { label: 'Teaching Staff', path: '/teaching', icon: <SchoolIcon /> },
  { label: 'Non-Teaching Staff', path: '/non-teaching', icon: <RoomServiceIcon /> },
  { label: 'Student', path: '/student', icon: <DashboardIcon /> },
  { label: 'Security Staff', path: '/security', icon: <SecurityIcon /> },
  { label: 'Receptionist', path: '/reception', icon: <SupportAgentIcon /> },
];

export default function App() {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => setMobileOpen((v) => !v);

  const drawer = (
    <Box role="navigation" aria-label="Primary" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Campus Portal</Typography>
        <Typography variant="body2" color="text.secondary">Role Dashboards</Typography>
      </Box>
      <Divider />
      <List sx={{ flex: 1 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            aria-current={location.pathname === item.path ? 'page' : undefined}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography variant="caption" color="text.secondary">v1.0</Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <a href="#main" style={{ position: 'absolute', left: -10000 }}>Skip to main content</a>
      <CssBaseline />
      <AppBar position="fixed" role="banner" elevation={0} sx={{ borderBottom: '1px solid #E5E7EB' }}>
        <Toolbar>
          {!isLgUp && (
            <IconButton color="inherit" aria-label="open navigation" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Campus Portal
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }} aria-label="Sidebar">
        {!isLgUp ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{ display: { xs: 'block', lg: 'none' }, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            open
            sx={{ display: { xs: 'none', lg: 'block' }, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
          >
            {drawer}
          </Drawer>
        )}
      </Box>

      <Box component="main" id="main" role="main" sx={{ flexGrow: 1, p: 3, width: { lg: `calc(100% - ${drawerWidth}px)` }, mt: 8 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/dept-head" element={<DeptHeadPage />} />
          <Route path="/teaching" element={<TeacherPage />} />
          <Route path="/non-teaching" element={<NonTeachingPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/reception" element={<ReceptionPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

// src/roles/AdminPage.jsx
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import KpiCard from '../components/KpiCard.jsx';
import TaskList from '../components/TaskList.jsx';
import SimpleTable from '../components/SimpleTable.jsx';

export default function AdminPage() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>Administration Admin</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}><KpiCard label="Total Users" value="1,248" hint="+3% WoW" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Active Roles" value="7" hint="All OK" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Open Tickets" value="12" hint="5 urgent" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Announcements" value="3" hint="New policy" /></Grid>

        <Grid item xs={12} md={5}>
          <TaskList
            title="Quick Actions"
            items={[
              { primary: 'Manage Users', secondary: 'Create/Disable/Reset' },
              { primary: 'Role Permissions', secondary: 'Update access' },
              { primary: 'System Settings', secondary: 'Branding, Email' },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <SimpleTable
            title="Recent Activity"
            columns={['Actor', 'Action', 'Time']}
            rows={[
              { Actor: 'IT Admin', Action: 'Added user', Time: 'Today 09:20' },
              { Actor: 'HR', Action: 'Updated roles', Time: 'Yesterday' },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}

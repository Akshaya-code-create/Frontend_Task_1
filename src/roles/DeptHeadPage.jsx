// src/roles/DeptHeadPage.jsx
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import KpiCard from '../components/KpiCard.jsx';
import TaskList from '../components/TaskList.jsx';
import SimpleTable from '../components/SimpleTable.jsx';

export default function DeptHeadPage() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>Department Head</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}><KpiCard label="Classes Today" value="18" hint="On schedule" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Pending Approvals" value="4" hint="Leave, Purchase" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Staff On Leave" value="2" hint="Back Mon" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Incidents" value="1" hint="Minor" /></Grid>

        <Grid item xs={12} md={5}>
          <TaskList
            title="Approvals"
            items={[
              { primary: 'Leave Request - J. Rao', secondary: '2 days' },
              { primary: 'Purchase Order #184', secondary: 'Lab supplies' },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <SimpleTable
            title="Roster"
            columns={['Name', 'Shift', 'Room']}
            rows={[
              { Name: 'A. Iyer', Shift: 'Morning', Room: 'B-201' },
              { Name: 'S. Khan', Shift: 'Afternoon', Room: 'C-105' },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}

// src/roles/NonTeachingPage.jsx
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import KpiCard from '../components/KpiCard.jsx';
import TaskList from '../components/TaskList.jsx';
import SimpleTable from '../components/SimpleTable.jsx';

export default function NonTeachingPage() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>Non-Teaching Staff</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}><KpiCard label="Open Tasks" value="9" hint="2 urgent" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Shifts Today" value="3" hint="All filled" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Inventory Alerts" value="1" hint="Lab gloves" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="SOP Updates" value="2" hint="Review" /></Grid>

        <Grid item xs={12} md={5}>
          <TaskList
            title="My Tasks"
            items={[
              { primary: 'Setup Lab B', secondary: 'Before 10:00' },
              { primary: 'File Incident Report', secondary: 'Minor spill' },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <SimpleTable
            title="Shifts"
            columns={['Staff', 'Time', 'Location']}
            rows={[
              { Staff: 'K. Mehta', Time: '8–12', Location: 'Lab A' },
              { Staff: 'P. Roy', Time: '12–4', Location: 'Store' },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}

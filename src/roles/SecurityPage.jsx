// src/roles/SecurityPage.jsx
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import KpiCard from '../components/KpiCard.jsx';
import TaskList from '../components/TaskList.jsx';
import SimpleTable from '../components/SimpleTable.jsx';

export default function SecurityPage() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Security Staff
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <KpiCard label="Visitors Today" value="73" hint="Peak 11am" />
        </Grid>
        <Grid item xs={12} md={3}>
          <KpiCard label="Active Passes" value="12" hint="Staff 8" />
        </Grid>
        <Grid item xs={12} md={3}>
          <KpiCard label="Incidents" value="0" hint="None" />
        </Grid>
        <Grid item xs={12} md={3}>
          <KpiCard label="Handover Notes" value="1" hint="Review" />
        </Grid>

        <Grid item xs={12} md={5}>
          <TaskList
            title="Quick Actions"
            items={[
              { primary: 'Issue Gate Pass', secondary: 'Visitor or Contractor' },
              { primary: 'Log Incident', secondary: 'Photo and notes' },
            ]}
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <SimpleTable
            title="Visitor Log"
            columns={['Name', 'Purpose', 'Time']}
            rows={[
              { Name: 'R. Gupta', Purpose: 'Meeting', Time: '10:12' },
              { Name: 'S. Dutta', Purpose: 'Delivery', Time: '10:25' },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}

// src/roles/ReceptionPage.jsx
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import KpiCard from '../components/KpiCard.jsx';
import TaskList from '../components/TaskList.jsx';
import SimpleTable from '../components/SimpleTable.jsx';

export default function ReceptionPage() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Receptionist / Front Desk
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <KpiCard label="Appointments Today" value="14" hint="2 waiting" />
        </Grid>
        <Grid item xs={12} md={3}>
          <KpiCard label="Open Enquiries" value="6" hint="3 new" />
        </Grid>
        <Grid item xs={12} md={3}>
          <KpiCard label="Check-ins" value="8" hint="So far" />
        </Grid>
        <Grid item xs={12} md={3}>
          <KpiCard label="Directory" value="Quick" hint="Shortcuts" />
        </Grid>

        <Grid item xs={12} md={5}>
          <TaskList
            title="Quick Actions"
            items={[
              { primary: 'Check-in Visitor', secondary: 'Issue badge' },
              { primary: 'Create Ticket', secondary: 'Enquiry or support' },
            ]}
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <SimpleTable
            title="Schedule"
            columns={['Name', 'Purpose', 'Time']}
            rows={[
              { Name: 'A. Sharma', Purpose: 'Counsel', Time: '11:00' },
              { Name: 'K. Rao', Purpose: 'Admin', Time: '11:30' },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}

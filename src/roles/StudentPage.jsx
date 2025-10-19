// src/roles/StudentPage.jsx
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import KpiCard from '../components/KpiCard.jsx';
import TaskList from '../components/TaskList.jsx';
import SimpleTable from '../components/SimpleTable.jsx';

export default function StudentPage() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>Student</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}><KpiCard label="Next Class" value="10:30" hint="C-105" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Assignments Due" value="2" hint="Fri latest" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Grades Updated" value="1" hint="Quiz 1" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Fees Status" value="OK" hint="No dues" /></Grid>

        <Grid item xs={12} md={5}>
          <TaskList
            title="Shortcuts"
            items={[
              { primary: 'View Timetable', secondary: 'Week view' },
              { primary: 'Submit Assignment', secondary: 'Algebra HW #5' },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <SimpleTable
            title="Upcoming"
            columns={['Course', 'Item', 'Due']}
            rows={[
              { Course: 'Math 101', Item: 'HW #5', Due: 'Fri' },
              { Course: 'CS 110', Item: 'Lab 2', Due: 'Mon' },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}
``

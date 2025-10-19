// src/roles/TeacherPage.jsx
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import KpiCard from '../components/KpiCard.jsx';
import TaskList from '../components/TaskList.jsx';
import SimpleTable from '../components/SimpleTable.jsx';

export default function TeacherPage() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>Teaching Staff</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}><KpiCard label="Today’s Classes" value="4" hint="8:30 start" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Attendance Pending" value="2" hint="Class 2, 4" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Grading Queue" value="36" hint="Due Fri" /></Grid>
        <Grid item xs={12} md={3}><KpiCard label="Messages" value="5" hint="2 unread" /></Grid>

        <Grid item xs={12} md={5}>
          <TaskList
            title="Quick Actions"
            items={[
              { primary: 'Take Attendance', secondary: 'Class 2 - B-201' },
              { primary: 'Post Assignment', secondary: 'Algebra HW #5' },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <SimpleTable
            title="Upcoming"
            columns={['Course', 'Item', 'Due']}
            rows={[
              { Course: 'Math 101', Item: 'Quiz 2', Due: 'Thu' },
              { Course: 'Sci 201', Item: 'Project Milestone', Due: 'Fri' },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}

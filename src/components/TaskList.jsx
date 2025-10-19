// src/components/TaskList.jsx
import * as React from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography, Box } from '@mui/material';

export default function TaskList({ title, items = [] }) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1">{title}</Typography>
        </Box>
        <List dense>
          {items.map((t, i) => (
            <ListItem key={i} divider disableGutters sx={{ px: 0 }}>
              <ListItemText primary={t.primary} secondary={t.secondary} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

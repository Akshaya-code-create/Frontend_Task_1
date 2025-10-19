// src/components/KpiCard.jsx
import * as React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function KpiCard({ label, value, hint, icon }) {
  return (
    <Card
      sx={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FCFDFE 100%)',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {icon && <Box sx={{ color: 'primary.main' }}>{icon}</Box>}
          <Typography variant="body2" color="text.secondary">{label}</Typography>
        </Box>
        <Box sx={{ mt: 1.25, display: 'flex', alignItems: 'baseline', gap: 1 }}>
          <Typography variant="h5" sx={{ letterSpacing: '-0.02em' }}>{value}</Typography>
          {hint && <Typography variant="caption" color="text.secondary">{hint}</Typography>}
        </Box>
      </CardContent>
    </Card>
  );
}

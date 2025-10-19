// src/components/SimpleTable.jsx
import * as React from 'react';
import {
  Card, CardContent, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography
} from '@mui/material';

export default function SimpleTable({ title, columns = [], rows = [] }) {
  return (
    <Card elevation={0} sx={{ border: '1px solid #E5E7EB' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>{title}</Typography>
        <TableContainer>
          <Table size="small" aria-label={title}>
            <TableHead>
              <TableRow>
                {columns.map((c) => <TableCell key={c}>{c}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((r, idx) => (
                <TableRow key={idx}>
                  {columns.map((c) => <TableCell key={c}>{r[c]}</TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

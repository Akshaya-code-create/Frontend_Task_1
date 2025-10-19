// src/theme.js
import { createTheme, alpha } from '@mui/material/styles';

const primary = '#2563EB';      // Indigo-500
const surface = '#0B1220';      // AppBar tint for glass effect (dark accent)
const bg = '#F6F8FB';          // Subtle page background
const paper = '#FFFFFF';       // Card surfaces
const border = '#E5E7EB';      // Subtle borders / dividers

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: primary },
    secondary: { main: '#7C3AED' }, // Purple accent
    background: { default: bg, paper },
    divider: border,
    text: { primary: '#0F172A', secondary: '#475569' },
  },
  shape: { borderRadius: 14 },
  spacing: 8,
  typography: {
    fontFamily: '"Inter", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial',
    h5: { fontWeight: 700, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: 0 },
  },
  shadows: [
    'none',
    '0 1px 2px rgba(0,0,0,0.05)',
    '0 4px 10px rgba(0,0,0,0.06)',
    '0 8px 24px rgba(0,0,0,0.08)',
    ...Array(21).fill('0 12px 32px rgba(0,0,0,0.10)'),
  ],
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(surface, 0.75),
          backdropFilter: 'saturate(140%) blur(12px)',
          WebkitBackdropFilter: 'saturate(140%) blur(12px)',
          borderBottom: `1px solid ${alpha('#000', 0.06)}`,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: `1px solid ${border}`,
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiToolbar: { styleOverrides: { root: { minHeight: 64 } } },
    MuiCard: {
      defaultProps: { elevation: 0, variant: 'outlined' },
      styleOverrides: {
        root: {
          borderColor: border,
          transition: 'box-shadow .2s ease, transform .2s ease, border-color .2s ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(2,6,23,0.08)',
            transform: 'translateY(-1px)',
            borderColor: alpha(primary, 0.18),
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 14 },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          margin: '2px 8px',
          '&.Mui-selected': {
            backgroundColor: alpha(primary, 0.10),
            color: primary,
            '& .MuiListItemIcon-root': { color: primary },
          },
        },
      },
    },
    MuiDivider: { styleOverrides: { root: { borderColor: border } } },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            fontWeight: 700,
            color: '#0F172A',
            background: '#FAFBFC',
            borderBottom: `1px solid ${border}`,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderBottom: `1px solid ${border}` },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            'radial-gradient(1200px 600px at -10% -20%, rgba(37,99,235,0.06), transparent 60%), radial-gradient(1000px 500px at 110% 0%, rgba(124,58,237,0.05), transparent 55%)',
        },
      },
    },
  },
});

export default theme;

import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  label: {
    fontSize: '.7rem',
    textAlign: 'right',
    fontWeight: 800,
    marginTop: 14,
    textTransform: 'uppercase',
  },
  formCaption: {
    textAlign: 'center',
    margin: theme.spacing(0, 'auto', 4, 'auto'),
  },
  padding: { padding: theme.spacing(1, 0) },
  formInput: { '& .MuiOutlinedInput-root': { marginRight: 20, width: 370 } },
  submitBtn: {
    '& button': {
      display: 'block',
      backgroundColor: colors.red[400],
      margin: theme.spacing(3, 'auto'),
      padding: theme.spacing('1rem', 9),
      textTransform: 'uppercase',
    },
  },
  formContainer: {
    width: 770,
    margin: theme.spacing(0, 'auto'),
  },
}));

export default useStyles;

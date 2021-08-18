import { CssBaseline, Paper, Button, Box, Grid, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useLoginAndSignup } from '../../helpers/useLoginAndSignup/useLoginAndSignup';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { signupHandleSubmit, logInAsDemoUser } = useLoginAndSignup();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <AuthHeader linkTo="/login" asideText="Already have an account?" btnText="Login" />
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5">
                  Create an account
                </Typography>
              </Grid>
            </Grid>
            <SignUpForm handleSubmit={signupHandleSubmit} />
          </Box>
          <Box className={classes.demoLoginContainer}>
            <Button onClick={logInAsDemoUser} size="small" variant="contained" color="secondary">
              {'LOGIN WITH DEMO USER'}
            </Button>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}

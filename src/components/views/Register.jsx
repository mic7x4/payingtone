import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserDetails from './UserDetails';
import UserAddress from './UserAddress';
import UserPassword from './UserPassword';


import './Register.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
    borderRadius: '25px 0px 0px 25px',
    '&:hover': {
      background:'#1e8e97'
    }
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  nextButton:{
    borderRadius: "0px 25px 25px 0px",
    '&:hover': {
      background:'#1e8e97'
    }
  }
}));

function getSteps() {
  return ['', '', ''];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <UserDetails/>;
    case 1:
      return <UserAddress/>;
    case 2:
      return <UserPassword/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function Register() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="stepper">
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className='steeper__cta'>
              <Button
                disableRipple
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button  className={classes.nextButton} onClick={handleNext} disableRipple>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

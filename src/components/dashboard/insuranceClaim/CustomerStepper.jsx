import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InsuranceClaimForm from "./InsuranceClaimForm";
import PoliceClaimForm from "./PoliceClaimForm";
import GarageQuote from "./GarageQuote";
import Reassessment from "./Reassessment";
import InsuranceConfirmation from "./InsuranceConfirmation";
import Receipt from "./Receipt";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "transparent",
  },
  button: {
    "&:hover": {
      background: "rgba(9, 83, 94, 0.88)",
    },
    background: "rgba(9, 83, 94, 0.88)",
    borderRadius: "12px",
    width: "100%",
    padding: "10px",
    outline: "none",
    border: "none",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#ffffff",
    cursor: "pointer",
    marginTop: "20px",
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["", "", "", "", "", "", ""];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Receipt />;
    case 1:
      return <PoliceClaimForm />;
    case 2:
      return <GarageQuote />;
    case 3:
      return <InsuranceClaimForm />;
    case 4:
      return <Reassessment />;
    case 5:
      return <InsuranceConfirmation />;
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="this__is__it">
      <Stepper
        className="transparent"
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div>
                <div>
                  <Button onClick={handleNext} className={classes.button}>
                    {activeStep === steps.length - 1
                      ? "Finish"
                      : "Submit Claim"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

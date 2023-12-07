import Stepper from 'react-stepper-horizontal';
import { useState } from 'react';

function UserDetails() {
    return <h2>User details</h2>;
  }
  
  function Payment() {
    return <h2>Payment information</h2>;
  }
  
  function Confirmation() {
    return <h2>Booking is confirmed</h2>;
  }

const StepperComponent = () =>{
    const [ activeStep, setActiveStep ] = useState(0);

    const steps = [
        { title: 'User details' },
        { title: 'Payment' },
        { title: 'Booking confirmation' },
      ];

      function getSectionComponent() {
        switch(activeStep) {
          case 0: return <UserDetails/>;
          case 1: return <Payment/>;
          case 2: return <Confirmation/>;
          default: return null;
        }
      }

    return(
        <div>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        activeColor="#ffd813"
        defaultColor="#fff"
        completeColor="#ffbd13"
        activeTitleColor="#000"
        completeTitleColor="#000"
        defaultTitleColor="#bbb"
        circleFontColor="#000"
        completeBarColor="#ffbd13"
  />
        


        
      <div style={{padding: '20px'}}>
        { getSectionComponent()  }
        { (activeStep !== 0 && activeStep !== steps.length - 1)
            && <button onClick={ () => setActiveStep(activeStep - 1) }>Previous</button>
        }
        { activeStep !== steps.length - 1
          && <button onClick={ () => setActiveStep(activeStep + 1) }>Next</button>
        }
      </div>
    </div>
    )

}

export default StepperComponent;
import { useState, useContext } from 'react';
import { Stepper, Button, Group, Container } from '@mantine/core';
import { Link } from 'react-router-dom';
import Cart from '../../pages/Cart/Cart';
import Checkout from '../../pages/Checkout/Checkout';
import Confirmation from '../../pages/Confirmation/Confirmation';
import { UserInfoContext } from '../../context//UserInfoProvider'


const FirstStep = ({ userInfo }) => {
  return (
    <div>
      <Cart userInfo={userInfo} />
    </div>
  );
};
const SecondStep = () => {
  return (
    <div>
      <Checkout />
    </div>
  );
};

const FinalStep = () => {
  return (
    <div>
      <Confirmation />
    </div>
  );
};


export default function Progress() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const steps = [
    <FirstStep userInfo={userInfo} />,
    <SecondStep />,
    <FinalStep />,
  ];

  return (
    <Container size='xl'>
      <Stepper active={active} onStepClick={false} breakpoint="sm"  style={{ width: "50%", margin: 'auto', padding: '20px' }} >
        <Stepper.Step label="First step" description="Shopping Cart">
          Step 1: Shopping Cart
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Shipping Address">
          Step 2: Shipping Address
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Confirmation">
          Step 3: Confirmation
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to the previous step
        </Stepper.Completed>
      </Stepper>

      {steps[active]}

      <Group position="center" mt="xl" mb='xl'>
        {/* <Button variant="default" onClick={prevStep}>Back</Button> */}
        <Button onClick={nextStep} >Next </Button>
      </Group>
    </Container>
  );
}
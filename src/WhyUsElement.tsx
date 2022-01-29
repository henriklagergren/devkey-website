import styled from "styled-components";
import BoltIcon from './assets/images/bolt.svg';
import SavingsIcon from './assets/images/savings.svg';
import ScheduleIcon from './assets/images/schedule.svg';
import SmartphoneIcon from './assets/images/smartphone.svg';
import SpeedIcon from './assets/images/speed.svg';
import HotIcon from './assets/images/whatshot.svg';

const BackgroundWrapper = styled.div`
    
`;

const Title = styled.h2`
    
`;

const Body = styled.h3`
    
`;

const Grid = styled.div`
  padding: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 30px;
`;



function WhyUsComponent() {
    return (
        <BackgroundWrapper>
            <Title></Title>
            <Body></Body>
            <Grid>
            </Grid>
        </BackgroundWrapper>
    )
}

export default WhyUsComponent;
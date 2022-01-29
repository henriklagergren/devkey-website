import styled from 'styled-components'
import Header from './Header';
import IntroElement from './IntroElement';
import WhyUsComponent from './WhyUsElement';

const Wrapper = styled.div`
  width  :100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Header/>
      <IntroElement/>
      <WhyUsComponent/>
    </Wrapper>
  );
}

export default App;

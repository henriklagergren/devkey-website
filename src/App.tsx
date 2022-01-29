import styled from 'styled-components'
import Header from './Header';
import IntroElement from './IntroElement';

const Wrapper = styled.div`
  width  :100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Header/>
      <IntroElement/>
    </Wrapper>
  );
}

export default App;

import styled from 'styled-components'
import Header from './Header';

const Wrapper = styled.div`
  width  :100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Header/>
    </Wrapper>
  );
}

export default App;

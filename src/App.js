import Header from './componentes/Header';
import styled from 'styled-components';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, #002F52 35%, #326589 165%);

  li {
    list-style: none;
  }
`

function App() {
  return (
    <AppContainer>
      <Header></Header>
    </AppContainer>
  );
}

export default App;
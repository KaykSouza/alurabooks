import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import styled from 'styled-components';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, #002F52 35%, #326589 165%);

`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
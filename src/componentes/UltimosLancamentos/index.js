import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from "../../imagens/livro2.png"
import styled from "styled-components"

const UltimosLancamentosContainer = styled.section`
    background: rgb(2,0,36);
    background: linear-gradient(90deg, #002F52 35%, #326589 165%);
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px" 
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer> 
    )
}

export default UltimosLancamentos
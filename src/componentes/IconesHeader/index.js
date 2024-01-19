import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icons = styled.ul`
    display: flex;
    align-items: center;
`

const icons = [perfil, sacola]

function IconesHeader() {
    return (
        <Icons>
            { icons.map((icone) => (
            <Icon className='icone'><img src={icone}></img></Icon>
            ))}
      </Icons>
    )
}

export default IconesHeader
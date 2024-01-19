import './style.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icons = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            { icons.map((icone) => (
            <li className='icone'><img src={icone}></img></li>
            ))}
      </ul>
    )
}

export default IconesHeader
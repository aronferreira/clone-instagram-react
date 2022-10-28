import './SidebarNav.css';
import {AiFillHome} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineCompass} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {FiHeart} from 'react-icons/fi';
import {FiPlusSquare} from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineMenu} from 'react-icons/ai';

function SidebarNav(props) {
    return (
        <div className='mainDiv'>
            <nav>
                <ul className='lista'>
                    <li><a href=""><AiFillHome className='icone'/><div className='center'><span className='negrito'>Página inicial</span></div></a></li>
                    <li><a href=""><FiSearch className='icone'/><div className='center'>Pesquisa</div></a></li>
                    <li><a href=""><AiOutlineCompass className='icone'/><div className='center'>Explorar</div></a></li>
                    <li><a href=""><RiMessengerLine className='icone'/><div className='center'>Mensagens</div></a></li>
                    <li><a href=""><FiHeart className='icone'/><div className='center'>Notificações</div></a></li>
                    <li><a href=""><FiPlusSquare className='icone'/><div className='center'>Criar</div></a></li>
                    <li><a href=""><img src={props.perfil} className='icone'/><div className='center'>Perfil</div></a></li>
                    <li className='mais'><a href=""><AiOutlineMenu className='icone'/><div className='center'>Mais</div></a></li>
                </ul>
               
            </nav>
        </div>
    )
}

export default SidebarNav;
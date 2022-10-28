import './Post.css';
import {FiMessageCircle} from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import {TbSend} from 'react-icons/tb';
import {RiBookmarkLine} from 'react-icons/ri';
import {AiOutlineSmile} from 'react-icons/ai';

function Post(props){
    return (
    <div className='posts'>
        <div className='Post'>
            <div className='perfilPost'>
                <img src={props.imgPerfil} className='postPerfilFoto' /><p className='nomePerfil'>{props.nomePerfil}</p><button className='opcoes'><p>...</p></button>
            </div>
            <div className='imgPost'><img src={props.imgPost} className='imagem' /></div>
            <div className='componentesInteragir'>
                <FiHeart className='interagirPosts'/>
                <FiMessageCircle className='interagirPostsCircle'/>
                <TbSend className='interagirPosts' />
                <RiBookmarkLine className='interagirPostsBookmark' />
            </div>
            <div className='curtidas'>
                <p className='infoPost'>{props.numeroCurtidas}</p>
            </div>
            <div className='autorPost'>
                <p className='postDescricao'><span className='infoPost'>{props.nomePerfil}</span> {props.textoPost}</p>
            </div>
            <div className='divComentarios'><p className='comentarios'>Ver todos os {props.quantidadeComentarios} comentários</p></div>
            <div className='dataPostagem'><p className='tempo'>HÁ {props.tempoPostagem}</p></div>
            <hr />
            <div className='comentar'><AiOutlineSmile className='interagirPostsEmoji'/><textarea placeholder='Adicione um comentário...' className='adicionarComentario'></textarea>
            <button className='botaoPublicar'>Publicar</button></div>
        </div>
        
        
        

    </div>
        
        
    )
}

export default Post;
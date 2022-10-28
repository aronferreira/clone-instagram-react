import './Recommended.css';
import perfil from './imagens/perfil.jpeg';
import karlkopinski from './imagens/karlkopinski.jpg';
import kimjunggius from './imagens/kimjunggius.jpg';
import sinixdesign from './imagens/sinixdesign.jpg';
import buzsheep from './imagens/buzsheep.jpg';
import oracle from './imagens/oracledobrasil.jpg';

function Recommended(){
    return (
    <div className="Recommended">
            <div className='perfil'>
                <img src={perfil} className='fotoPerfil' /><p className='perfilNome'>aronf.r<p className='usuario'>aron</p></p><button>Mudar</button>
            </div>
            <div className='sugestoes'>
                <p className='sugestaoEtiqueta'>Sugestões para você</p><p className='tudo'>Ver tudo</p>
            </div>
            <div className='sugestoesLista'>
                <ul className='perfisLista'>
                    <li className='perfisDetalhe'><img src={karlkopinski} className='fotoPerfilRecomendado' /><p className='perfilNome'>karlkopinski<p className='perfilNomeRecomendado'>Sugestões para você</p></p><button>Seguir</button></li>
                    <li className='perfisDetalhe'><img src={kimjunggius} className='fotoPerfilRecomendado' /><p className='perfilNome'>kimjunggius<p className='perfilNomeRecomendado'>Sugestões para você</p></p><button>Seguir</button></li>
                    <li className='perfisDetalhe'><img src={sinixdesign} className='fotoPerfilRecomendado' /><p className='perfilNome'>sinixdesign<p className='perfilNomeRecomendado'>Sugestões para você</p></p><button>Seguir</button></li>
                    <li className='perfisDetalhe'><img src={buzsheep} className='fotoPerfilRecomendado' /><p className='perfilNome'>buzsheep<p className='perfilNomeRecomendado'>Sugestões para você</p></p><button>Seguir</button></li>
                    <li className='perfisDetalhe'><img src={oracle} className='fotoPerfilRecomendado' /><p className='perfilNome'>oracledobrasil<p className='perfilNomeRecomendado'>Sugestões para você</p></p><button>Seguir</button></li>
                </ul>
                <ul className='info'>
                    <li className='infoList'><a href=''>Sobre</a></li><p className='marco'>•</p><li className='infoList'><a href=''>Ajuda</a></li>
                    <p className='marco'>•</p><li className='infoList'><a href=''>Imprensa</a></li><p className='marco'>•</p><li className='infoList'><a href=''>API</a></li>
                    <p className='marco'>•</p><li className='infoList'><a href=''>Carreiras</a></li><p className='marco'>•</p><li className='infoList'>
                    <a href=''>Privacidade</a></li><p className='marco'>•</p><li className='infoList'><a href=''>Termos</a></li><p className='marco'>•</p><li className='infoList'><a href=''>Localizações</a></li>
                    <p className='marco'>•</p><li className='infoList'><a href=''>Idioma</a></li>
                    <p className='copyright'>© 2022 INSTAGRAM FROM META</p>
                </ul>
                
            </div>
    </div>
    )
}

export default Recommended;
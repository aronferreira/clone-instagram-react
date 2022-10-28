import './Timeline.css';
import Stories from './Stories/Stories';
import Post from './Feed/Post';
import Recommended from './Recommended/Recommened';
import ahmed from './perfisPost/ahmed.jpg';
import twentyonepilots from './perfisPost/twentyonepilots.jpg';
import eleeza from './perfisPost/eleeza.jpg';
import proa from './perfisPost/institutoproa.png';
import post1 from './posts/ahmedaldoori.jpg';
import post2 from './posts/twentyonepilots.jpg';
import post3 from './posts/eleeza.jpg';
import post4 from './posts/proa.jpg';

function Timeline() {
    return (
        <div className='Timeline'>
            <div className='contentContainer'>
                <div className='feed'>
                    <Stories  />
                    <Post imgPerfil={ahmed} imgPost={post1} numeroCurtidas='8,902 curtidas' nomePerfil='ahmedaldoori_art' textoPost='I haven’t posted the full image of this yet because I’ve been away from my PC (original uncropped is back in the states) but here’s a snippet of it.
                        It was a piece for a gallery exhibit here in Japan that featured my work as “World Grand Prix Champion” of the Limits Digital art Battle.
                        The print of it was around 9x6 meters on a wall 👀' quantidadeComentarios='70' 
                    tempoPostagem='1 HORA'/>
                    <Post imgPerfil={proa} imgPost={post4} numeroCurtidas='1,000,000 curtidas' nomePerfil='instituto.proa' textoPost='!!!' quantidadeComentarios='1,000,000' 
                    tempoPostagem='3 HORAS'/>
                    <Post imgPerfil={twentyonepilots} imgPost={post2} numeroCurtidas='231,898 curtidas' nomePerfil='twentyonepilots' textoPost='ψ' quantidadeComentarios='621' 
                    tempoPostagem='3 HORAS'/>
                    <Post imgPerfil={eleeza} imgPost={post3} numeroCurtidas='29,472 curtidas' nomePerfil='eleeza' textoPost='🌙🍂' quantidadeComentarios='122' 
                    tempoPostagem='3 HORAS'/>
                    
                   
                </div>
                <Recommended />
            </div>
        </div>
    )
}
export default Timeline;
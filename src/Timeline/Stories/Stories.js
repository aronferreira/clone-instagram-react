import './Stories.css'
import perfilAhmed from './imagensStoriesPerfis/ahmed.jpg';
import perfilEleeza from './imagensStoriesPerfis/eleeza.jpg';
import perfilPROA from './imagensStoriesPerfis/institutoproa.png';
import perfilTOP from './imagensStoriesPerfis/twentyonepilots.jpg';
import perfilMKBHD from './imagensStoriesPerfis/mkbhd.jpg';
import perfilLTT from './imagensStoriesPerfis/ltt.png';
import perfilThiagoSpyked from './imagensStoriesPerfis/thiagospyked.jpg';
import perfilBancoPan from './imagensStoriesPerfis/bancopan.png';

function Stories(){
    return ( 
        <div className='Stories'>
            <div className='container'>
                <div className='coluna'><img src={perfilAhmed} className='teste' alt='foto de perfil de ahmedaldoori_art'/><p className='perfilEtiqueta'>ahmedaldoori_art</p></div>
                <div className='coluna'><img src={perfilEleeza} className='teste'/><p className='perfilEtiqueta'>eleeza</p></div>
                <div className='coluna'><img src={perfilPROA} className='teste'/><p className='perfilEtiqueta'>instituto.proa</p></div>
                <div className='coluna'><img src={perfilMKBHD} className='teste'/><p className='perfilEtiqueta'>mkbhd</p></div>
                <div className='coluna'><img src={perfilTOP} className='teste'/><p className='perfilEtiqueta'>twentyonepilots</p></div>
                <div className='coluna'><img src={perfilBancoPan} className='teste'/><p className='perfilEtiqueta'>bancopan</p></div>
                <div className='coluna'><img src={perfilLTT} className='teste'/><p className='perfilEtiqueta'>linustech</p></div>
                <div className='coluna'><img src={perfilThiagoSpyked} className='teste'/><p className='perfilEtiqueta'>thiagospyked_cras</p></div>
            </div>
        </div>
    )
}

export default Stories;

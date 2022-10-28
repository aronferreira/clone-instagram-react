import './Sidebar.css';
import SidebarNav from './SidebarNav/SidebarNav';
import fotoPerfil from './ImagensSidebar/perfil.jpeg';

function Sidebar(props){
   return( 
   <div className='sidebarDiv'>
      <div className='Sidebar'>
        <img src={props.logo} alt='Logo do Instagram' className='logoInstagram'/>
        <SidebarNav perfil={fotoPerfil} />
      </div>
   </div>
   );
}
export default Sidebar;

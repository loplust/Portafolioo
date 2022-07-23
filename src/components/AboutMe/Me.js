import AboutMe from '../AboutMe/AboutMe';
import Intereses from '../Intereses/Intereses';
import NavBar from '../NavBar/NavBar';
import Presentation from '../Presentation/Presentation';

function Me({ darkMode }) {
    return (
      <div className={`container ${darkMode ? 'darkMode' : ''}`}> 
        <NavBar darkMode={darkMode}/>
        <Presentation darkMode={darkMode}/>
        <Intereses darkMode={darkMode}/>
        <AboutMe darkMode={darkMode}/>
      </div>
    );
  }
  
  export default Me;

import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Blurred } from './components/blured';
import { Footer_A } from './components/Footer';
import { NavBar } from './components/Navbar';
import {About} from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Projects } from './components/sections/Projects';
import {Skills} from './components/sections/Skills'
import Menu from './components/menu';
function App() {

  let options = {
    activeClass:     'navActive',
    anchors:              ['about', 'skills', 'projects', 'contact'],
    scrollBar:            false,
    navigation:           true,
    verticalAlign:        false,
    sectionPaddingTop:    '50px',
    sectionPaddingBottom: '50px',
    arrowNavigation:      true
  };



  return (
    <div className="App bg-white h-screen w-screen overflow-x-hidden relative px-24 md:px-6">
      <Menu />
      <About />  
    </div>
  )
}

export default App

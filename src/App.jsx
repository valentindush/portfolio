
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Blurred } from './components/blured';
import { Footer_A } from './components/Footer';
import { NavBar } from './components/Navbar';
import {About} from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Projects } from './components/sections/Projects';
import {Skills} from './components/sections/Skills'
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
    <div className="App bg-[#092027] h-screen w-screen">

      <Blurred className={"top-[30%] left-12"}/>
      <Blurred className={"top-[40%] right-8"}/>
      <Header>
        <NavBar/>
      </Header>
      <Footer>
        <Footer_A/>
      </Footer>

    <SectionsContainer {...options}>
      <Section> 
        <About/>
      </Section>

      <Section>
        <Skills />
      </Section>

      <Section>
        <Projects/>
      </Section>
      <Section>
        <Contact />
      </Section>
    </SectionsContainer>
      
    </div>
  )
}

export default App


import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Blurred } from './components/blured';
import { NavBar } from './components/Navbar';

function App() {

  let options = {
    sectionClassName:     'section',
    anchors:              ['about', 'projects', 'skills', 'contact'],
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

      </Footer>

    <SectionsContainer>
      <Section> 

      </Section>

      <Section>
        
      </Section>

      <Section>
      
      </Section>
    </SectionsContainer>
      
    </div>
  )
}

export default App

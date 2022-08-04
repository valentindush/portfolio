
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Blurred } from './components/blured';
import { NavBar } from './components/Navbar';

function App() {



  return (
    <div className="App bg-[#092027] h-screen w-screen">

      <Blurred pos={["20%","100px"]} />

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

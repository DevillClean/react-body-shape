import './css/base/main.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import InstructorsPage from './components/pages/InstructorsPage';
import ContsctsPage from './components/pages/ContactsPage';
import SectionPage from './components/pages/SectionPage';
import HomePage from './components/pages/HomePage';
import Navbar from './components/navbar/Navbar';
import FooterBloc from './components/footer/FooterBloc';
import Section from './components/section/SectionBig';

import ScrollToTop from './components/utils/scrollToTop';

function App() {
  return (
    <div className="App">
        <Router>
          <ScrollToTop />
            <Navbar />
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/contacts" element={<ContsctsPage/>}/>
                <Route path="/instructors" element={<InstructorsPage/>}/>
                <Route path="/sections"  element={<SectionPage/>}/>
                <Route path='/section/:id' element={<Section/>}/>
              </Routes>
            <FooterBloc />
        </Router>
    </div>
  );
}

export default App;

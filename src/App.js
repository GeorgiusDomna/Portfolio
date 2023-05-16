import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Projects from './pages/projects/Projects';
import Home from './pages/home/Home';
import Contacts from './pages/contacts/Contacts';
import Skills from './pages/skills/Skills';
import Project from './pages/project/Project';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/project/:id' element={<Project />} />
            <Route path='/contacts' element={<Contacts />}/>
            <Route path='/skills' element={<Skills />}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
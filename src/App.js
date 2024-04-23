import './App.css';
import Intro from './Asset/Components/intro.js';
import Nav from './Asset/Components/nav.js';
import Skills from './Asset/Components/skills.js';
import Exp from './Asset/Components/exp.js';
import Projects from './Asset/Components/projects.js';
import Contact from './Asset/Components/contact.js';
function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Skills />
      <Exp />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

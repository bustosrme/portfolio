import Layout from './layout';
import About from './pages/About';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Education from './pages/Education';

function App() {

  return (
    <Layout>
      <Intro />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default App

import './App.css'
import Hero from './Compo/Hero/Hero'
import Grid from './Compo/PracticaGrid/Grid'
import Skills from './Compo/Skills/Skills'
import UX from './Compo/UX/UI/UX'
import Projects from './Compo/Projects/Projects'
import AF from './Compo/AF/AF'

function App() {

  return (
    <>
      <div>
        <Hero/>
        <Skills/>
        <Projects/>
        <UX/>
        <AF/>
      </div>
    </>
  )
}

export default App

import './App.css'
import SubFooter from './components/SubFooter/SubFooter'
import MainFooter from './components/MainFooter/MainFooter'
import SkillSetSection from './components/SkillSetsSection/SkillSetSection'

function App() {
  return (
    <main className="App">
      <SkillSetSection />
      <SubFooter />
      <MainFooter/>
    </main>
  )
}

export default App

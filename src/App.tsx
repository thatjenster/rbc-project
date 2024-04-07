import './App.css'
import SubFooter from './components/SubFooter/SubFooter'
import MainFooter from './components/MainFooter/MainFooter'
import Header from './components/Header/Header'
import SkillSetSection from './components/SkillSetsSection/SkillSetSection'
import TeamSection from './components/TeamSection/TeamSection'
import bioData from './data/bioData.json'

function App() {
  return (
    <main className="App">
      <Header />
      <SkillSetSection bioData={bioData}/>
      <TeamSection bioData={bioData}/>
      <SubFooter bioData={bioData}/>
      <MainFooter/>
    </main>
  )
}

export default App

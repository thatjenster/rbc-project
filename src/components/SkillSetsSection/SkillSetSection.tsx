import { BioData } from '../../types/types'
import './SkillSetSection.css'


function SkillSetSection({ bioData }: { bioData: BioData }) {
  const { section_intro } = bioData

  const introItem = section_intro[0]

  return (
    <div className='max-width-container'>
      <div className='columns'>
        <div className='column1'>
          <h2>{introItem.title}</h2>
        </div>
        <div className='column2'>
          <p>{introItem.text}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillSetSection

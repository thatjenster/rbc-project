import { BioData } from '../../types/types'
import './SubFooter.css'


function SubFooter({ bioData }: { bioData: BioData }) {
  const { section_cta } = bioData

  const ctaItem = section_cta[0]

  return (
    <div className='bg-Full'>
      <div className='container'>
        <h2>{ctaItem.title}</h2>
        <p>{ctaItem.text}</p>
        <button className='btn'>
          <a href={ctaItem.link.url}>{ctaItem.link.title}</a>
        </button>
      </div>
    </div>
  )
}

export default SubFooter

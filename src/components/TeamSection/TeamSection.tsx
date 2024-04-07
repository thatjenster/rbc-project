import { useState } from 'react'
import { BioData, TeamMember } from './../../types/types'
import TeamMemberCard from './../TeamMemberCard/TeamMemberCard'
import TeamMemberPopup from './../TeamMemberPopup/TeamMemberPopup'
import './TeamSection.css'

interface Props {
  bioData: BioData
}

function TeamSection({ bioData }: Props) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleCardClick = (member: TeamMember, index: number) => {
    setSelectedMember(member)
    setSelectedIndex(index)
  }

  const handleClosePopup = () => {
    setSelectedMember(null)
  }

  const handlePrevious = () => {
    const newIndex = (selectedIndex - 1 + bioData.team.length) % bioData.team.length
    setSelectedMember(bioData.team[newIndex])
  }

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % bioData.team.length
    setSelectedMember(bioData.team[newIndex])
    setSelectedIndex(newIndex)
  }

  return (
    <section className="team-section">
      <div className="team-cards">
        {bioData.team.map((member, index) => (
          <TeamMemberCard
            key={index}
            member={member}
            onClick={() => handleCardClick(member, index)}
          />
        ))}
      </div>
      {selectedMember && (
        <TeamMemberPopup
          member={selectedMember}
          onClose={handleClosePopup}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </section>
  )
}

export default TeamSection

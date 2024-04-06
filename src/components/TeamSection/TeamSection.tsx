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

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member)
  }

  const handleClosePopup = () => {
    setSelectedMember(null)
  }

  return (
    <section className="team-section">
      <div className="team-cards">
        {bioData.team.map((member, index) => (
          <TeamMemberCard
            key={index}
            member={member}
            onClick={() => handleCardClick(member)}
          />
        ))}
      </div>
      {selectedMember && (
        <TeamMemberPopup
          member={selectedMember}
          onClose={handleClosePopup}
        />
      )}
    </section>
  )
}

export default TeamSection

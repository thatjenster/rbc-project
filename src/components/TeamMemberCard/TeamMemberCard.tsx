import { TeamMember } from './../../types/types'
import nextIcon from '@/assets/icons/next.svg'
import './TeamMemberCard.css'

interface Props {
  member: TeamMember
  onClick: () => void
}

function TeamMemberCard({ member, onClick }: Props) {
  return (
    <div className="team-member-card" onClick={onClick}>
      <div className="team-member-card-content">
        <img src={member.headshot} alt={member.name} />
        <div className="member-name">
          <h2> {member.name}{member.designation !== '' ? `, ${member.designation}` : ''}</h2>
          <img src={nextIcon} alt="Arrow" className="arrow-icon" />
        </div>
        <p>{member.title}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard
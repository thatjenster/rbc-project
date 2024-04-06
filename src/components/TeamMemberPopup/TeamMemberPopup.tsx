import { TeamMember } from '../../types/types'
import closeIcon from '@/assets/icons/close.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'
import emailIcon from '@/assets/icons/email.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import previousIcon from '@/assets/icons/previous.svg'
import nextIcon from '@/assets/icons/next.svg'
import './TeamMemberPopup.css'

interface Props {
  member: TeamMember
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

function TeamMemberPopup({ member, onClose, onPrevious, onNext }: Props) {

  const createMarkup = (text: string) => {
    return { __html: text };
  };
  return (
    <div className="team-member-popup">
      <div className="popup-content">
        <div className="left-column">
          <img src={member.headshot} alt={member.name} />
        </div>
        <div className="right-column">
          <h2>{member.name}</h2>
          <h4>{member.title}</h4>
          <div className="contact-info">
            {member.number && (
              <div className="contact-item">
                <img src={phoneIcon} alt="Phone" />
                <p>{member.number}</p>
              </div>
            )}
            {member.email && (
              <div className="contact-item">
                <img src={emailIcon} alt="Email" />
                <a href={member.email}>Email me</a>
              </div>
            )}
            {member.linkedin && (
              <div className="contact-item">
                <img src={linkedinIcon} alt="LinkedIn" />
                <a href={member.linkedin}>Linkedin</a>
              </div>
            )}
          </div>
          <div className="bio" dangerouslySetInnerHTML={createMarkup(member.bio)} />
          <div className="navigation-buttons">
            <button onClick={onPrevious}>
              <img src={previousIcon} alt="Previous" />
              Previous
            </button>
            <button onClick={onNext}>
              Next
              <img src={nextIcon} alt="Previous" />
            </button>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </button>
      </div>
    </div>
  );
}

export default TeamMemberPopup


       

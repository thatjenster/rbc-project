import { TeamMember } from '../../types/types';
import closeIcon from '@/assets/icons/close.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'
import emailIcon from '@/assets/icons/email.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import './TeamMemberPopup.css'

interface Props {
  member: TeamMember;
  onClose: () => void;
}

function TeamMemberPopup({ member, onClose }: Props) {
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
            <div className="contact-item">
              <img src={phoneIcon} alt="Phone" />
              <p>{member.number}</p>
            </div>
            <div className="contact-item">
              <img src={emailIcon} alt="Email" />
              <p>{member.email}</p>
            </div>
            <div className="contact-item">
              <img src={linkedinIcon} alt="LinkedIn" />
              <p>{member.linkedin}</p>
            </div>
          </div>
          <p>{Array.isArray(member.designation) ? member.designation.join(', ') : member.designation}</p>
          <p>{member.bio}</p>
        </div>
        <button className="close-button" onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </button>
      </div>
    </div>
  );
}

export default TeamMemberPopup


       

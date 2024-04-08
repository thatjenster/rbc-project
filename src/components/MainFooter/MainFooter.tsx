import './MainFooter.css'
import rightIcon from '@/assets/icons/right-arrow.svg'

function MainFooter() {
  return (
    <footer className='bg-footer'>
      <div className="footer-columns">
        <ul className="footer-column">
          <h3>About RBC</h3>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Our Company
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Corporate Governance
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Investor Relations
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            History
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Contact Us
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Regulatory Information
          </li>
        </ul>

        <ul className="footer-column">
          <h3>News</h3>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Media Newsroom
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Thought Leadership
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Awards
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Publications
          </li>
        </ul>

        <ul className="footer-column">
          <h3>Corporate Citizenship</h3>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Our Impact
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            ESG Reporting
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Voluntary Codes and Public Commitments
          </li>
        </ul>

        <ul className="footer-column">
          <h3>Work at RBC</h3>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Careers at RBC
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Diversity &#38; Inclusion at RBC
          </li>
          <li className="footer-link">
            <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
            Become a Supplier
          </li>
        </ul>
      </div>
    </footer>
  )
  }
  
  export default MainFooter
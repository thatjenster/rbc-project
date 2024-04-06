import './MainFooter.css'
import rightIcon from './../../assets/icons/right-arrow.svg'

function MainFooter() {
    return (
      <footer className='bg-footer'>
          <div className="footer-columns">
            <div className="footer-column">
                <h3>About RBC</h3>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Our Company
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Corporate Governance
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Investor Relations
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    History
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Contact Us
                    </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Regulatory Information
                    </a>
            </div>

            <div className="footer-column">
                <h3>News</h3>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Media Newsroom
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Thought Leadership
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Awards
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Publications
                </a>
            </div>

            <div className="footer-column">
                <h3>Corporate Citizenship</h3>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Our Impact
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    ESG Reporting
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Voluntary Codes and Public Commitments
                </a>
            </div>

            <div className="footer-column">
                <h3>Work at RBC</h3>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Careers at RBC
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Diversity &#38; Inclusion at RBC
                </a>
                <a href="#" className="footer-link">
                    <img className='arrow-svg' src={rightIcon} alt="Arrow Icon"/>
                    Become a Supplier
                </a>
            </div>
        </div>
      </footer>
    )
  }
  
  export default MainFooter
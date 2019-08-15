import React from 'react'
import ReactGA from 'react-ga'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import LeadContent from '../components/leadcontent'
import ThreeSteps from '../components/threesteps'
import LoanCalculator from '../components/loancalculator'
import InfoButtonContainer from '../components/infobuttoncontainer'
import TermInfo from './terminfo'
import FAQ from './faq'
import Eligibility from './eligibility'
import ContactForm from './contactform'
import LoanApp from './loanapp'
import LeadCaptureForm from './leadcaptureform'


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          termInfo: true,
          faq: false,
          eligibility: false,
          contact: false
        }
        this.threesteps = React.createRef();
        this.apply = React.createRef();
      }
    
      scrollToContent = () => {
        this.threesteps.current.scrollIntoView({ behavior: 'smooth' });
        ReactGA.event({
          category: 'How It Works Button',
          action: 'click'
        })
      }

      scrollToApply = () => {
        this.apply.current.scrollIntoView({ behavior: 'smooth' });
        ReactGA.event({
          category: 'Apply Now Button',
          action: 'click',
          label: 'banner'
        })
      }

      scrollToApply2 = () => {
        this.apply.current.scrollIntoView({ behavior: 'smooth' });
        ReactGA.event({
          category: 'Apply Now Button',
          action: 'click',
          label: 'getting started'
        })
      }
    
      activateMoreInfo = () => {
        this.setState({
          termInfo: true,
          faq: false,
          eligibility: false,
          contact: false
        })
      }
    
      activateFAQ = () => {
        this.setState({
          termInfo: false,
          faq: true,
          eligibility: false,
          contact: false
        })
      }
    
      activateEligibility = () => {
        this.setState({
          termInfo: false,
          faq: false,
          eligibility: true,
          contact: false
        })
      }
    
      activateContact = () => {
        this.setState({
          termInfo: false,
          faq: false,
          eligibility: false,
          contact: true
        })
      }
    
      render(){
        return (
          <Layout>

            {/* UPDATE SCHOOL NAME */}
            <SEO title='SCHOOL NAME' />

            <Banner 
                howItWorksOnClick={this.scrollToContent}  
                applyNowOnClick={this.scrollToApply}  
            />

            {/* UPDATE SCHOOL NAME */}
            <LeadContent 
              schoolName='SCHOOL NAME'
            />
            <ThreeSteps
              onClick={this.scrollToApply2} 
              ref={this.threesteps}
            />
            <LoanCalculator />
            <LoanApp 
              ref={this.apply}
            />
            <LeadCaptureForm />
            <InfoButtonContainer 
              info={this.activateMoreInfo}
              faq={this.activateFAQ}
              eligibility={this.activateEligibility}
              contact={this.activateContact} 
            />
            {this.state.termInfo && <TermInfo />}
            {this.state.faq && <FAQ />}
            {this.state.eligibility && <Eligibility />}
            {this.state.contact && <ContactForm formName={this.props.formName}/>}
          </Layout>
        )
      }
}

export default Homepage
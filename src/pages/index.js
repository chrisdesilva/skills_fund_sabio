import React, { useEffect } from 'react'
import Homepage from '../components/homepage'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'

const trackingId = 'UA-******* UPDATE'
ReactGA.initialize(trackingId, {
  debug: true,
  titleCase: false,
  gaOptions: {
    siteSpeedSampleRate: 100
  }
})

const netlifyFormName = 'SCHOOLNAME_contact'

const IndexPage = () => {
  
  useEffect(() => {
    ReactPixel.init('928181257515785');
  })
  
  return (
    <div>
      <form name={netlifyFormName} data-netlify='true' netlify-honeypot='bot-field' hidden>
        <input type='text' name='name' />
        <input type='email' name='email' />
        <input type='text' name='school'/>
        <input type='button' name='identity' />
        <input type='button' name='identity' />
        <input type='button' name='identity' />
        <input type='text' name='otherDescription' />
        <textarea name='comments' />
      </form>
      <Homepage 
        formName={netlifyFormName}
      />
    </div>
  )
}



export default IndexPage

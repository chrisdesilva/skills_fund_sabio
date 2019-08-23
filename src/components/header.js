import PropTypes from "prop-types"
import React from "react"
import schoolLogo from "../images/sabio_logo.png" // add school logo to images folder and import here
import skillsFund from "../images/skillsFund_logo.png"

// update school-specific info

const schoolInfo = {
  schoolName: 'Sabio',
  schoolUrl: 'https://sabio.la/' // update with url of school's website
}

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex justify-center my-4">
      <div className="w-full flex justify-around items-center py-2 px-2 lg:px-0">
          <a
            href={schoolInfo.schoolUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={schoolLogo} 
              alt={schoolInfo.schoolName}
              className="h-8"
              loading="lazy"
            />
          </a>
          <h3 className="font-light mb-0 hidden lg:block">{schoolInfo.schoolName} tuition made easy</h3>
          <a
            href="https://skills.fund/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={skillsFund} 
              alt="Skills Fund logo"
              className="h-8"
              loading="lazy"
            />
          </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

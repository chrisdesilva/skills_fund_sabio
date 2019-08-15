import React from "react"
// add hero image to src > images, update file path below
import banner from "../images/1425x522.png"
import Button from "./button"

const Banner = props => (
    <div>
        <div className="bg-cover text-white flex flex-col justify-center items-center relative z-0 pb-4 h-auto" style={{backgroundImage: `url(${banner})`, height: `30rem`}} id="banner">
            {/* update h2 with school-specific content */}
            <h2 className="text-3xl lg:text-4xl font-normal text-center mb-5 mt-24">SCHOOL-SPECIFIC HEADLINE</h2>
            <h3 className="text-base lg:text-xl font-light text-center">Know exactly what you'll pay with Skills Fund</h3>
            <div className="flex flex-col lg:flex-row">
                <Button
                    buttonClassName="uppercase bg-secondary p-3 lg:mr-4 w-40 rounded-full shadow-lg text-white"
                    divClassName="flex justify-center mt-5"
                    text="how it works"
                    onClick={props.howItWorksOnClick}
                />
                <Button
                    buttonClassName="uppercase bg-tertiary p-3 lg:mb-0 lg:ml-4 w-40 rounded-full shadow-lg text-white"
                    divClassName="flex justify-center mt-5"
                    text="apply now"
                    onClick={props.applyNowOnClick}
                />
            </div>
        </div>
    </div>
)

export default Banner;
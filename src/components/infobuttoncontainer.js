import React from 'react'

// no updates necessary

const InfoButtonContainer = props => {
    return (
        <div className="flex flex-wrap justify-center items-center lg:justify-around mx-0 lg:mx-24 my-5">
            <button className="w-40 bg-secondary text-white p-3 rounded-full shadow-lg my-2 mx-2 lg:mx-5" onClick={props.info}>Terms</button>
            <button className="w-40 bg-secondary text-white p-3 rounded-full shadow-lg my-2 mx-2 lg:mx-5" onClick={props.faq}>FAQ</button>
            <button className="w-40 bg-secondary text-white p-3 rounded-full shadow-lg my-2 mx-2 lg:mx-5" onClick={props.eligibility}>Eligibility</button>
            <button className="w-40 bg-secondary text-white p-3 rounded-full shadow-lg my-2 mx-2 lg:mx-5" onClick={props.contact}>Contact</button>
        </div>
    )
}



export default InfoButtonContainer
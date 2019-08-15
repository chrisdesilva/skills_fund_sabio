import React from 'react'
import Button from './button'

const costOfLiving = true // true if at least one program offers cost of living
const schoolName = 'SCHOOL NAME'

const ThreeSteps = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h2 className="text-secondary font-normal text-center">Getting Started</h2>
            <div className="flex flex-col lg:flex-row justify-center text-center">
                <div className="flex flex-col items-center mx-2 lg:w-1/2 px-12">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">1</p>
                    <h3 className="uppercase">explore your options</h3>
                    <p>Use the loan calculator below to know exactly what you'll pay <strong>before</strong> you apply. You can borrow up to the full tuition amount {costOfLiving && <span>plus the cost of living stipend</span>} for your progam.</p>
                </div>

                {/* vvv Update this section as needed vvv */}
                <div className="flex flex-col items-center mx-2 lg:w-1/3 px-12 lg:px-0">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">2</p>
                    <h3 className="uppercase">select your campus</h3>
                    <p>EXAMPLE TEXT: Choose from one of four Metis locations including Chicago, Seattle, New York City, and San Francisco.</p>
                </div>
                {/* ^^^ Update this section as needed ^^^ */}

                <div className="flex flex-col items-center mx-2 lg:w-1/2 px-12">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">3</p>
                    <h3 className="uppercase">apply for funding!</h3>
                    <p className="m-0">You'll be on your way to an exciting career in tech as part of {schoolName}'s powerful network.</p>
                    <Button
                        buttonClassName="uppercase bg-tertiary p-3 rounded-full shadow-lg text-white"
                        divClassName="flex justify-center mt-5"
                        text="apply now"
                        onClick={props.onClick}
                    /> 
                </div>
            </div>
        </div>
    )
})

export default ThreeSteps
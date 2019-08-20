import React from 'react'
import Button from './button'

const ApplyFooter = props => {
    return (
        <div className="flex flex-col items-center bg-secondary py-8 mt-3 lg:mt-0 mx-2 lg:mx-10 rounded">
            <h2 className="text-white font-bold text-center">Ready to get Started?</h2>
            <div className="mx-2 lg:w-1/2 px-12">
            <p className="text-center text-white">Begin building your future today!</p>
                <Button
                    buttonClassName="uppercase bg-primary p-3 rounded-full shadow-lg text-white"
                    divClassName="flex justify-center mt-5"
                    text="apply now"
                    onClick={props.onClick}
                /> 
            </div>
        </div>
    )
}

export default ApplyFooter
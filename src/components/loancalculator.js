import React, { useEffect, useState } from 'react'

const LoanCalculator = () => {

    const defaultLoanAmount = 10000 // defaultLoanAmount, placeholder, and loanAmount/setLoanAmount should all be the same number
    const placeholder = '$10,000'
    const [loanAmount, setLoanAmount] = useState(10000)
    const minLoanAmt = 2000
    const interestRate36 = 8.99
    const interestRate60 = 10.99
    const origFee = 0.04
    const multiPrograms = true // only true if there are multiple programs
    const [interestPayment, setInterestPayment] = useState({ payment36: null, payment60: null })
    const [monthlyPayment, setMonthlyPayment] = useState({ payment36: null, payment60: null })
    const [loanType, setLoanType] = useState('0') // default to 0 for interest-only, 1 for immediate repayment
    const [loanInformation, setLoanInformation] = useState({ 
        maxLoanAmt: 19500,
        loanTerm36: true, // only true if 36 month option is available
        loanTerm60: true, // only true if 60 month option is available
        k: 5, // (program length in weeks / 4) + 2 -- round program length down to nearest number divisible by 4 (ie. 27 week program rounds down to 24, 24 / 4 + 6 = 12, k = 12)
        '0': { // interest-only
            apr36: 11.16, 
            apr60: 12.51
        },
        '1': null 
    })

    const updateLoanAmount = e => {
        setLoanAmount(Number(e.target.value))
    }

    const calculateMonthlyPayment = () => {
        const monthlyRate36 = (8.99 / 100) / 12
        const monthlyRate60 = (10.99 / 100) / 12
        const borrowedAmount = loanAmount || defaultLoanAmount
        const totalLoan = borrowedAmount * (1 + origFee)
        let pv = totalLoan
        let payment36 = Number((monthlyRate36 * pv) / (1 - (1 / Math.pow(1 + monthlyRate36, 36)))).toFixed(2)
        let payment60 = Number((monthlyRate60 * pv) / (1 - (1 / Math.pow(1 + monthlyRate60, 60)))).toFixed(2)
        setMonthlyPayment({ payment36: payment36, payment60: payment60 })
        setLoanAmount(borrowedAmount)
        calculateInterest()
    }

    const calculateInterest = () => {
        let interest36 = (loanAmount * (1 + origFee) / 12 * (8.99 / 100)).toFixed(2)
        let interest60 = (loanAmount * (1 + origFee) / 12 * (10.99 / 100)).toFixed(2)
        setInterestPayment({payment36: interest36, payment60: interest60})
    }

    useEffect(() => {
        calculateMonthlyPayment()
    })

    const selectProgram = e => {
        let program = e.target.value
        switch(program) {
            case "Full-Stack Web Development": // use this info for default case at bottom
                setLoanInformation({
                    maxLoanAmt: 19500,
                    loanTerm36: true,
                    loanTerm60: true,
                    '0': { 
                        k: 5, 
                        apr36: 11.16, 
                        apr60: 12.51
                    },
                    '1': null
                })
                setLoanType('0')
                break;
            case "AWS Cloud": 
                setLoanInformation({
                    maxLoanAmt: 10995,
                    loanTerm36: true,
                    loanTerm60: true,
                    '0': { 
                        k: 5, 
                        apr36: 11.16, 
                        apr60: 12.51
                    },
                    '1': {
                        apr36: 11.69,
                        apr60: 12.71
                    }
                })
                setLoanType('0')
                break;
            case "Cyber Security": 
                setLoanInformation({
                    maxLoanAmt: 15000,
                    loanTerm36: true,
                    loanTerm60: true,
                    '0': null,
                    '1': {
                        apr36: 11.69,
                        apr60: 12.71
                    }
                })
                setLoanType('1')
                break;
            case "Part-Time Full-Stack":
                setLoanInformation({
                    maxLoanAmt: 13500,
                    loanTerm36: true,
                    loanTerm60: true, 
                    '0': {
                        k: 8,
                        apr36: 10.94,
                        apr60: 12.41
                    },
                    '1': {
                        apr36: 11.69,
                        apr60: 12.71
                    }
                })
                setLoanType('0')
                break;
            default: // info below needs to match info from first program
                setLoanInformation({
                    maxLoanAmt: 19500,
                    loanTerm36: true,
                    loanTerm60: true,
                    '0': { 
                        k: 5, 
                        apr36: 11.16, 
                        apr60: 12.51
                    },
                    '1': null
                })
                setLoanType('0')
                break;
        }
    }

    return (
        <div className="flex flex-col justify-center m-2 lg:m-10">
            <div className="shadow-xl rounded h-auto p-8 flex flex-col items-center">
                <h3 className="text-center">Calculate Your Monthly Payments</h3>

                {/* UPDATE LOAN AMOUNTS AND COST OF LIVING BY PROGRAM BELOW */}
                
                    <p>Choose the loan amount that works best for you. Borrow up to your metro's max for tuition and cost of living for the Full Stack Web Development programs, up to $9,995 for the AWS Cloud program tuition & $1,000 for cost of living, up to $15,000 for Cyber Security tuition, or up to $13,500 for the Part-Time Full-Stack program tuition.</p>
                    <div className="flex flex-col items-center">
                    
                    {/* WEB TABLE */}
                    <table className="hidden lg:inline">
                        <tbody>
                            <tr>
                                <th className="text-center">Program</th>
                                <th className="text-center">Tuition</th>
                                <th className="text-center">Cost of Living</th>
                                <th className="text-center">Max Total</th>
                            </tr>
                            <tr>
                                <td className="text-center">Full Stack Web Development - <strong>Irvine</strong></td>
                                <td className="text-center">$11,500</td>
                                <td className="text-center">$6,000</td>
                                <td className="text-center">$17,500</td>
                            </tr>
                            <tr>
                                <td className="text-center">Full Stack Web Development - <strong>Culver City & Downtown LA</strong></td>
                                <td className="text-center">$13,500</td>
                                <td className="text-center">$6,000</td>
                                <td className="text-center">$19,500</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                    {/* MOBILE TABLE */}
                    <table className="lg:hidden">
                        <tbody>
                            <tr>
                                <th className="text-center">Full-Stack Web Development - Irvine</th>
                            </tr>
                            <tr>
                                <td className="text-center">Tuition: $11,500</td>
                            </tr>
                            <tr>
                                <td className="text-center">Cost of Living: $6,000</td>
                            </tr>
                            <tr>
                                <td className="text-center">Max Total: $17,500</td>
                            </tr>
                            <tr>
                                <th className="text-center">Full-Stack Web Development - Culver City & Downtown LA</th>
                            </tr>
                            <tr>
                                <td className="text-center">Tuition: $13,500</td>
                            </tr>
                            <tr>
                                <td className="text-center">Cost of Living: $6,000</td>
                            </tr>
                            <tr>
                                <td className="text-center">Max Total: $19,500</td>
                            </tr>
                        </tbody>
                    </table>
                
                {/* ADD OR REMOVE PROGRAMS BELOW */}
                {multiPrograms &&
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <label className="text-xs text-center">Select a Program:</label>
                        <select className="rounded border-2 border-primary mb-5 bg-white text-primary text-center" onChange={selectProgram}>
                            <option value="Full Stack Web Development">Full Stack Web Development</option>
                            <option value="AWS Cloud">AWS Cloud</option>
                            <option value="Cyber Security">Cyber Security</option>
                            <option value="Part-Time Full-Stack">Part-Time Full-Stack</option>
                        </select>
                    </div>
                }

                {/* DROPDOWN MENU FOR LOAN TYPES */}
                {loanInformation['0'] && loanInformation['1'] &&
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <label className="text-xs text-center">Select a Loan Type:</label>
                        <select className="rounded border-2 border-primary mb-5 bg-white text-primary text-center" onChange={(e) => setLoanType(e.target.value)}>
                            <option value="0">Interest-Only</option>
                            <option value="1">Immediate Repayment</option>
                        </select>
                    </div>
                }

                {/* LOAN AMOUNT INPUT */}
                <div className="flex flex-col justify-center w-1/2 md:w-1/3">
                    <label className="text-xs text-center">Enter a loan amount:</label>
                    <input type="number" onChange={updateLoanAmount} className="rounded border-2 border-primary p-3 mb-5 text-primary text-center text-2xl" maxLength="6" placeholder={placeholder} />
                </div>

                {minLoanAmt > loanAmount || loanAmount > loanInformation.maxLoanAmt ? 
                    <p className="text-red-500 text-xs">Please enter a number between {minLoanAmt} and {loanInformation.maxLoanAmt}</p> 
                        : 
                    null}
                <p className="m-0 text-center">Students may borrow from ${minLoanAmt} to ${loanInformation.maxLoanAmt}</p>
                {loanType === "0" && <p className="text-xs text-center hidden lg:inline mb-2">Make interest-only payments while in the program. Two months after completion, begin full payments.</p>}
                {loanType === "1" && <p className="text-xs text-center hidden lg:inline mb-2">Start making full payments (interest + principal) about one month after disbursement.</p>}
                <div className="shadow-xl rounded px-4 md:px-12 pt-8 flex flex-col lg:flex-row">
                    
                    {/* OPTION 1, 36 MONTHS */}
                    {loanInformation.loanTerm36 &&
                        <div className={loanInformation.loanTerm60 ? "flex flex-col mb-8 lg:mb-0 lg:mx-6" : "flex flex-col"}>
                            <h3 className="text-primary text-center font-normal">Option 1</h3>
                            <h4 className="text-primary text-center font-normal">36-Month Fixed Rate Loan</h4>
                            <p className="m-0 text-center">{interestRate36}% Interest Rate, {loanInformation[loanType]['apr36']}% APR*</p>
                            {loanType === "0" && <p className="text-xs text-center lg:hidden mb-2">Make interest-only payments while in the program. Two months after completion, begin full payments.</p>}
                            {loanType === "1" && <p className="text-xs text-center lg:hidden mb-2">Start making full payments (interest + principal) about one month after disbursement.</p>}
                            <p className="font-bold text-center my-4">Payments:</p>
                                <div className="flex justify-around">
                                    {loanType === "0" && 
                                        <div className="flex flex-col items-center">
                                            <h4 className="border-secondary border-b text-center font-normal mx-5 mb-3">Interest-Only Period</h4>
                                            {loanAmount > minLoanAmt && loanAmount < loanInformation.maxLoanAmt ?
                                                <p className="text-secondary text-2xl mb-0">${interestPayment.payment36}</p>
                                                    :
                                                <p className="text-secondary text-2xl mb-0">--</p>
                                            }
                                            <p className="text-xs">per month</p>
                                        </div>
                                    }
                                    <div className="flex flex-col items-center">
                                        <h4 className="border-secondary border-b text-center font-normal mx-5 mb-3">Full Payment Period</h4>
                                        {loanAmount > minLoanAmt && loanAmount < loanInformation.maxLoanAmt ?
                                                <p className="text-secondary text-2xl mb-0">${monthlyPayment.payment36}</p>
                                                    :
                                                <p className="text-secondary text-2xl mb-0">--</p>
                                            }
                                        <p className="text-xs">per month</p>
                                    </div>
                                </div>
                        </div>
                    }

                    {/* OPTION 2, 60 MONTHS */}
                    {loanInformation.loanTerm60 &&
                        <div className="flex flex-col lg:mx-6">
                            <h3 className="text-primary text-center lg:mt-0 font-normal">{loanInformation.loanTerm36 && loanInformation.loanTerm60 ? "Option 2" : "Option 1"}</h3>
                            <h4 className="text-primary text-center lg:mt-0 font-normal">60-Month Fixed Rate Loan</h4>
                            <p className="m-0 text-center">{interestRate60}% Interest Rate, {loanInformation[loanType]['apr60']}% APR*</p>
                            <p className="text-xs text-center lg:hidden">Make interest-only payments while in the program. Two months after completion, begin full payments.</p>
                            <p className="font-bold text-center my-4">Payments:</p>
                            <div className="flex justify-around">
                                    {loanType === "0" && 
                                        <div className="flex flex-col items-center">
                                            <h4 className="border-secondary border-b text-center font-normal mx-5 mb-3">Interest-Only Period</h4>
                                            {loanAmount > minLoanAmt && loanAmount < loanInformation.maxLoanAmt ?
                                                <p className="text-secondary text-2xl mb-0">${interestPayment.payment60}</p>
                                                    :
                                                <p className="text-secondary text-2xl mb-0">--</p>
                                            }
                                            <p className="text-xs">per month</p>
                                        </div>
                                    }
                                    <div className="flex flex-col items-center">
                                        <h4 className="border-secondary border-b text-center font-normal mx-5 mb-3">Full Payment Period</h4>
                                        {loanAmount > minLoanAmt && loanAmount < loanInformation.maxLoanAmt ?
                                                <p className="text-secondary text-2xl mb-0">${monthlyPayment.payment60}</p>
                                                    :
                                                <p className="text-secondary text-2xl mb-0">--</p>
                                            }
                                        <p className="text-xs">per month</p>
                                    </div>
                                </div>
                        </div>
                    }

                </div>
                <p className="text-center text-xs m-3"><i>*The Annual Percentage Rate (APR) shown is estimated based on the loan type, origination fee, and approximate program length. The actual APR may be slightly different than the example provided based on loan type and program length. To learn how an Annual Percentage Rate (APR) is calculated, <a href="https://skills.fund/resources/how-is-an-apr-calculated" rel="noreferrer noopener">visit our blog.</a></i></p>
            </div>
        </div>
    )
}


export default LoanCalculator
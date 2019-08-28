import React from 'react'
import GeneralTerms from './generalterms'
import InterestOnlyTerms from './interestonlyterms'
import ImmRepaymentTerms from './immrepaymentterms'

const schoolInfo = {
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    interestOnly: [{
        programName:'Full-Stack Web Development and AWS Cloud',
        APR36: '11.16%',
        financeCharge36: '$2,293.64',
        IOPayment36: '$77.91',
        FullMonthlyPayment36: '$330.67',
        APR60: '12.51%',
        financeCharge60: '$4,040.39',
        IOPayment60: '$95.25',
        FullMonthlyPayment60: '$226.07',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
        programLength: '3' // program length in months
    },
    {
        programName:'Part-Time Full-Stack',
        APR36: '10.94%',
        financeCharge36: '$2,527.38',
        IOPayment36: '$77.91',
        FullMonthlyPayment36: '$330.67',
        APR60: '12.41%',
        financeCharge60: '$4,326.13',
        IOPayment60: '$95.25',
        FullMonthlyPayment60: '$226.07',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
        programLength: '6' // program length in months
    }],
    immediateRepayment: [{ // set values to empty strings if no IR option is available
        programName: 'Cyber Security, Part-Time Full-Stack, and AWS Cloud',
        APR36: '11.69%',
        financeCharge36: '$1,904.08',
        FullMonthlyPayment36: '$330.67',
        APR60: '12.71%',
        financeCharge60: '$3,564.16',
        FullMonthlyPayment60: '$226.07',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
    }]
}

const multipleLoanLengths = true // true if both 36 and 60 month options are available
const multipleLoanTypes = true // true if both IR and IO are available

const TermInfo = () => (
    <div className="text-center mx-2 lg:mx-10 p-8 shadow rounded">
       <h2 className="py-4 text-center">More Info On Terms</h2>
        <div>
            <GeneralTerms 
                multipleLoanLengths={multipleLoanLengths}
                multipleLoanTypes={multipleLoanTypes}
                interestRate36={schoolInfo.interestRate36}
                interestRate60={schoolInfo.interestRate60}
                IOAPR36={schoolInfo.interestOnly.APR36}
                IOAPR60={schoolInfo.interestOnly.APR60}
                IRAPR36={schoolInfo.immediateRepayment.APR36}
                IRAPR60={schoolInfo.immediateRepayment.APR60}
            />

            {schoolInfo.interestOnly.map(school => {
                return <InterestOnlyTerms
                programName={school.programName} 
                loanExampleAmt={school.LoanExampleAmt}
                APR36={school.APR36}
                APR60={school.APR60}
                finCharge36={school.financeCharge36}
                finCharge60={school.financeCharge60}
                ioPayment36={school.IOPayment36}
                ioPayment60={school.IOPayment60}
                fullPayment36={school.FullMonthlyPayment36}
                fullPayment60={school.FullMonthlyPayment60}
                oFee={school.LoanExampleOFeeAmt}
                loanPlusOFee={school.LoanExampleAmtPlusOFee}
                programLength={school.programLength}
                multipleLoanLengths={multipleLoanLengths}
            />
            })}

            {multipleLoanTypes && schoolInfo.immediateRepayment.map(school => {
                return <ImmRepaymentTerms
                programName={school.programName} 
                loanExampleAmt={school.LoanExampleAmt}
                APR36={school.APR36}
                APR60={school.APR60}
                finCharge36={school.financeCharge36}
                finCharge60={school.financeCharge60}
                fullPayment36={school.FullMonthlyPayment36}
                fullPayment60={school.FullMonthlyPayment60}
                oFee={school.LoanExampleOFeeAmt}
                loanPlusOFee={school.LoanExampleAmtPlusOFee}
                multipleLoanLengths={multipleLoanLengths}
                multipleLoanTypes={multipleLoanTypes}
            />
            })

            }
        </div>
    </div>
)

export default TermInfo
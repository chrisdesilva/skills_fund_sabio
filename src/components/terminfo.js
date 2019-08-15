import React from 'react'
import GeneralTerms from './generalterms'
import InterestOnlyTerms from './interestonlyterms'
import ImmRepaymentTerms from './immrepaymentterms'

// update with school-specific info
const schoolInfo = {
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    interestOnly: {
        APR36: 'XX.XX%',
        financeCharge36: '$X,XXX.XX',
        IOPayment36: '$XX.XX',
        FullMonthlyPayment36: '$XXX.XX',
        APR60: 'XX.XX%',
        financeCharge60: '$X,XXX.XX',
        IOPayment60: '$XX.XX',
        FullMonthlyPayment60: '$XXX.XX',
        LoanExampleAmt: '$XX,XXX',
        LoanExampleOFeeAmt: '$XXX',
        LoanExampleAmtPlusOFee: '$XX,XXX',
        programLength: 'X' // program length in months
    },
    immediateRepayment: { // set values to empty strings if no IR option is available
        APR36: 'XX.XX%',
        financeCharge36: '$X,XXX.XX',
        FullMonthlyPayment36: '$XXX.XX',
        APR60: 'XX.XX%',
        financeCharge60: '$X,XXX.XX',
        FullMonthlyPayment60: '$XXX.XX',
        LoanExampleAmt: '$XX,XXX',
        LoanExampleOFeeAmt: '$XXX',
        LoanExampleAmtPlusOFee: '$XX,XXX',
    }
}
const multipleLoanLengths = true // true if both 36 and 60 month options are available
const multipleLoanTypes = true // true if both IR and IO are available

const TermInfo = () => (
    <div className="border-2 border-gray-300 shadow-xl rounded-lg text-center m-2 lg:m-10 p-8">
       <h2 className="mt-4">More Info On Terms</h2>
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

            <InterestOnlyTerms 
                loanExampleAmt={schoolInfo.interestOnly.LoanExampleAmt}
                APR36={schoolInfo.interestOnly.APR36}
                APR60={schoolInfo.interestOnly.APR60}
                finCharge36={schoolInfo.interestOnly.financeCharge36}
                finCharge60={schoolInfo.interestOnly.financeCharge60}
                ioPayment36={schoolInfo.interestOnly.IOPayment36}
                ioPayment60={schoolInfo.interestOnly.IOPayment60}
                fullPayment36={schoolInfo.interestOnly.FullMonthlyPayment36}
                fullPayment60={schoolInfo.interestOnly.FullMonthlyPayment60}
                oFee={schoolInfo.interestOnly.LoanExampleOFeeAmt}
                loanPlusOFee={schoolInfo.interestOnly.LoanExampleAmtPlusOFee}
                programLength={schoolInfo.interestOnly.programLength}
                multipleLoanLengths={multipleLoanLengths}
            />

            {multipleLoanTypes && 
                <ImmRepaymentTerms 
                    loanExampleAmt={schoolInfo.immediateRepayment.LoanExampleAmt}
                    APR36={schoolInfo.immediateRepayment.APR36}
                    APR60={schoolInfo.immediateRepayment.APR60}
                    finCharge36={schoolInfo.immediateRepayment.financeCharge36}
                    finCharge60={schoolInfo.immediateRepayment.financeCharge60}
                    fullPayment36={schoolInfo.immediateRepayment.FullMonthlyPayment36}
                    fullPayment60={schoolInfo.immediateRepayment.FullMonthlyPayment60}
                    oFee={schoolInfo.immediateRepayment.LoanExampleOFeeAmt}
                    loanPlusOFee={schoolInfo.immediateRepayment.LoanExampleAmtPlusOFee}
                    multipleLoanLengths={multipleLoanLengths}
                    multipleLoanTypes={multipleLoanTypes}
                />
            }
        </div>
    </div>
)

export default TermInfo
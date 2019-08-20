import React from 'react'

const LoanCalcPaymentTable = () => (
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
    </div>
)

export default LoanCalcPaymentTable
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
import Link from 'next/link'
import Image from 'next/image'

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotlaBalanceBoxProps) => {
    return (
        <section className="total-balance">
            <div className="total-balance-chart">
                <DoughnutChart accounts={accounts} />
            </div>

            <div className="flex flex-col gap-6">
                <h2 className="header-2">
                    Bank Accounts: {totalBanks}
                </h2>
                <div className="flex flex-col gap-2">
                    <p className="total-balance-label">
                        Total Current Balance
                    </p>
                    <div className="total-balance-amount flex-center gap-2">
                        <AnimatedCounter amount={totalCurrentBalance} />

                    </div>
                </div>
            </div>

            <div className="ml-auto h-full">
                <Link href="/" className="flex gap-2">
                    <Image
                        src="/icons/plus.svg"
                        width={20}
                        height={20}
                        alt="plus"
                        className='h-[20px] w-[20px]'
                    />
                    <h2 className="text-14 font-semibold text-gray-600">Add Account</h2>
                </Link>
            </div>


        </section>
    )
}

export default TotalBalanceBox
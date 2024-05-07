import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
    return (
        <aside className='right-sidebar'>
            <section className="flex flex-col pb-8">
                <div className="profile-banner" />
                <div className="profile">
                    <div className='profile-img cursor-pointer pointer-events-none'>
                        <span className="text-5xl text-blue-500 font-bold">
                            {user?.name[0]}
                        </span>
                    </div>

                    <div className="profile-details">
                        <h1 className="profile-name">
                            {user?.name}
                        </h1>
                        <p className="profile-email">
                            {user?.email}
                        </p>
                    </div>
                </div>
            </section>

            <section className="banks h-[calc(100%-310px)]">
                <div className="flex w-full justify-between p-4">
                    <h2 className="header-2">My Banks</h2>

                    <Link href="/" className="flex gap-2">
                        <Image
                            src="/icons/plus.svg"
                            width={20}
                            height={20}
                            alt="plus"
                            className='h-[20px] w-[20px]'
                        />
                        <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
                    </Link>
                </div>

                <div className="h-[calc(100%-48px)] px-4 overflow-y-scroll overflow-x-hidden">
                    <div className="flex flex-col-reverse">
                        {banks.map((bank, index) => {
                            // const xOffset = (banks.length - 1 - index) * 6;
                            const scale = 1 - (banks.length - 1 - index) * 0.03
                            
                            return <div className="h-12" style={{ transform: `scale(${scale})` }} key={bank.$id}>
                                <BankCard
                                    account={banks[0]}
                                    userName={user?.name}
                                    showBalance={false}
                                />
                            </div>
                        })}
                    </div>


                </div>
            </section>
        </aside>
    )
}

export default RightSidebar
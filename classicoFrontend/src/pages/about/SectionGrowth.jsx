import { CircleDollarSign, Landmark, ShoppingBag, Store } from 'lucide-react'
import React from 'react'

const SectionGrowth = () => {
    return (
        <div className='max-w-[1170px] mx-auto flex flex-wrap justify-center lg:justify-between gap-6 mb-28'>
            {[
                {
                    icon: <Store size={40} />,
                    title: '10.5k',
                    desc: 'Sellers active on our site',
                },
                {
                    icon: <CircleDollarSign size={40} />,
                    title: '33k',
                    desc: 'Monthly Product Sale',
                },
                {
                    icon: <ShoppingBag size={40} />,
                    title: '45.5k',
                    desc: 'Customer active in our site',
                },
                {
                    icon: <Landmark size={40} />,
                    title: '25k',
                    desc: 'Annual gross sale in our site',
                },
            ].map((item, i) => (
                <div
                    key={i}
                    className='flex flex-col items-center border border-gray-300 rounded px-6 py-6 gap-2 
                               w-full sm:w-[48%] lg:w-[270px] h-[230px] 
                               hover:bg-red-600/80 hover:text-white transition-all'
                >
                    <div className='w-20 h-20 rounded-full border-8 border-gray-300 flex items-center justify-center mb-4'>
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                            {item.icon}
                        </div>
                    </div>
                    <h1 className='font-sans font-semibold text-3xl'>{item.title}</h1>
                    <p className='text-center'>{item.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default SectionGrowth

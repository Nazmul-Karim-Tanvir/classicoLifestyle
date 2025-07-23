import React from 'react';
import speakerImage from '../../assets/images/offerImages/speaker.svg';
import { useCountdown } from '../../utils/countdown.js';

const SectionExclusiveOffer = () => {
    const targetDate = new Date('2025-07-22T00:00:00');
    const { days, hours, minutes, seconds, total } = useCountdown(targetDate);

    return (
        <div className='max-w-[1170px] mx-auto my-[100px]'>
            <div className='relative bg-black text-white rounded overflow-hidden h-auto md:h-[500px] flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10'>

                {/* Text Content */}
                <div className="z-10 max-w-md text-center md:text-left">
                    <p className='font-sans font-semibold py-2 md:py-5 text-green-400'>Categories</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Enhance Your Music Experience</h2>
                    <p className="text-gray-300 mb-6">
                        Get the best sound experience with our top-rated speaker. Limited time offer. Don’t miss out!
                    </p>

                    {total > 0 ? (
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-black text-xl font-mono mb-6">
                            {[
                                { label: 'Days', value: days },
                                { label: 'Hours', value: hours },
                                { label: 'Minutes', value: minutes },
                                { label: 'Seconds', value: seconds },
                            ].map(({ label, value }) => (
                                <div
                                    key={label}
                                    className="flex flex-col items-center justify-center w-16 md:w-20 h-20 rounded-full bg-white"
                                >
                                    <div className="text-3xl font-bold leading-5">{value}</div>
                                    <div className="text-sm text-black font-sans font-medium mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-red-600 font-bold text-2xl mb-6">Offer Ended!</div>
                    )}

                    <button className="bg-green-400 hover:bg-red-600 transition text-white px-9 py-3 rounded font-semibold">
                        Buy Now
                    </button>
                </div>

                {/* Speaker Image */}
                <div className="mt-8 md:mt-0 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2">
                    <img
                        src={speakerImage}
                        alt="Speaker"
                        className="h-[230px] md:h-[330px] object-contain drop-shadow-[0_4px_40px_rgba(255,255,255,0.4)]"
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionExclusiveOffer;

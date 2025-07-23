import React from 'react';
import employee1 from '../../assets/images/aboutImages/employee1.png';
import employee2 from '../../assets/images/aboutImages/employee2.png';
import employee3 from '../../assets/images/aboutImages/employee3.png';
import { CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";

const SectionEmployee = () => {
    const employees = [
        {
            name: 'Tom Cruise',
            title: 'Founder & Chairman',
            img: employee1,
        },
        {
            name: 'Emma Watson',
            title: 'Managing Director',
            img: employee3,
        },
        {
            name: 'Will Smith',
            title: 'Product Designer',
            img: employee2,
        },
    ];

    return (
        <div className="max-w-[1170px] mx-auto mb-28 flex flex-wrap justify-center md:justify-between gap-6 px-4">
            {employees.map((employee, index) => (
                <div
                    key={index}
                    className="w-full sm:w-[80%] md:w-[48%] lg:w-[31%] bg-white rounded-md shadow-md"
                >
                    {/* Image */}
                    <div className="flex justify-center items-center bg-gray-100 aspect-[2/3] overflow-hidden rounded-t-md">
                        <img
                            src={employee.img}
                            alt={employee.name}
                            className="object-cover h-full w-full"
                        />
                    </div>

                    {/* Text + Social Icons */}
                    <div className="p-4 text-center">
                        <h1 className="text-xl font-semibold text-gray-800">{employee.name}</h1>
                        <p className="text-sm text-gray-600 mb-3">{employee.title}</p>
                        <div className="flex justify-center gap-4 text-[26px]">
                            <CiTwitter className="text-gray-600 hover:text-blue-500 cursor-pointer transition" />
                            <CiInstagram className="text-gray-600 hover:text-pink-500 cursor-pointer transition" />
                            <CiLinkedin className="text-gray-600 hover:text-blue-700 cursor-pointer transition" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SectionEmployee;

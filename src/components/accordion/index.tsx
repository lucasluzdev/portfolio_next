"use client"
import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    role: string;
    timerange: string;
    content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, role, timerange, content }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border rounded-lg p-2 mx-auto my-3">
            <div
                className="cursor-pointer flex justify-between items-center"
                onClick={toggleAccordion}
            >

                <div className='flex-auto flex justify-between items-center'>
                    <h4 className="lg:basis-10/12 basis-9/12 text-lg font-semibold"><span className='text-white'>{role}</span><span className='text-[#951D33]'> @ </span>{title}</h4>
                    <h4 className="lg:basis-2/12 basis-3/12 text-md font-bold ml-1 mr-0 text-center">{timerange}</h4>
                </div>

                <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform mx-0`}>&#9660;</span>

            </div>
            {isOpen && (
                <div className="mt-2 ml-2 px-5 workexp-list" dangerouslySetInnerHTML={{ __html: content }} />
            )}
        </div>
    );
}

export default Accordion;

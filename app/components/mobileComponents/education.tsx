import React from 'react'

const MobileEducation = () => {

  const education = [
    {
      field: "BS Computer Science",
      date: "April 2021",
      university: "Fast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat inventore tenetur animi ad, voluptates expedita quo facere amet vel eligendi aliquid minima saepe sapiente modioptio deserunt, nemo iusto.",
    },
    {
      field: "BS Computer Science  ",
      date: "April 2021",
      university: "BAHRIA UNIVERSITY KARACHI CAMPUS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat inventore tenetur animi ad, voluptates expedita quo facere amet vel eligendi aliquid minima saepe sapiente modioptio deserunt, nemo iusto.",
    },
    
  ];

  return (

    
    <div className='w-full p-5'>
        <h2 className="scroll-m-20 border-b border-blue-100  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Education
    </h2>
    <div className='mt-4 divide-y-4 divide-blue-200'>
         {education.map((item, i) => (
          <div
            key={i}
            className="mt-4 py-5 flex flex-wrap md:flex-nowrap border-b border-blue-500 last:border-none"
          >
            {/* Left Section (Degree & Date) */}
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-900 uppercase">
                {item.field}
              </span>
              <span className="mt-1 text-blue-500 text-sm">{item.date}</span>
            </div>

            {/* Right Section (University & Description) */}
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.university}
              </h2>
              <p className="leading-relaxed text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default MobileEducation
import React from 'react'

const MobileExperience = () => {
 const education = [
    {
      position: "FRONT END DEVELOPER",
      copmName: "Company Name here",
      dateStart: "April 2021",
      dateEnd: "April 2021",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat inventore tenetur animi ad, voluptates expedita quo facere amet vel eligendi aliquid minima saepe sapiente modioptio deserunt, nemo iusto.",
        work:["Develop your official website", "Make E-commerce website for client", "Have contributed on the task"]
    },
     {
      position: "FRONT END DEVELOPER",
      copmName: "Company Name here",
      dateStart: "April 2021",
      dateEnd: "April 2021",
      description:
        "I am Front End website developer . Itaque quaerat inventore tenetur animi ad, voluptates expedita quo facere amet vel eligendi aliquid minima saepe sapiente modioptio deserunt, nemo iusto.",
        work:["Develop your official website", ]
    },
     {
      position: "FRONT END DEVELOPER",
      copmName: "Company Name here",
      dateStart: "April 2021",
      dateEnd: "April 2021",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat inventore tenetur animi ad, voluptates expedita quo facere amet vel eligendi aliquid minima saepe sapiente modioptio deserunt, nemo iusto.",
        work:["Develop your official website", "Make E-commerce website for client", ]
    },

  ];

  return (
    <div className='w-full p-5'>
        <h2 className="scroll-m-20 border-b border-gray-200  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Experience    
    </h2>
    <div className='mt-4 divide-y-4 divide-blue-300'>
 {education.map((item, i) => (
          <div
            key={i}
            className="py-4 flex flex-wrap md:flex-nowrap border-b border-gray-100 last:border-none"
          >
            {/* Left Section (Degree & ddateEnd) */}
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-900 uppercase">
                {item.position}
              </span>
              <span className="mt-1 text-blue-500 text-sm">{`${item.dateStart} - ${item.dateEnd}`} </span>
             
            </div>


            {/* Right Section (copmName & Description) */}
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.copmName}
              </h2>
              <p className="leading-relaxed text-gray-700"></p>

              <ul className="list-disc text-gray-600 mr-2">

                {item.work.map((workItem, i)=>(

                
                <li key={i}>{workItem}</li>

                ))}
                
              </ul>
            </div>
          </div>
        ))}
        </div>

    </div>
  )
}

export default MobileExperience
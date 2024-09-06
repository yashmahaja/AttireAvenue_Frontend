import React from 'react'

const HomeSectionCard = ({data}) => {
  return (
    <div className=' cursor-pointer flex flex-col items-center 
    bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border'>

        <div className='h-[13rem] w-[10rem] '>
            {/* object cover: trim down part not above */}
            <img className='object-cover object-top h-[13rem] w-[10rem]' src = {data.imageUrl}
            alt = ""/>

        </div>

        <div className='p-4'>
            <h3 className='text--lg font-medium text-gray-900'>{data.brand}</h3>
            <p className='mt-2 text-sm text-gray-500'>{data.title}</p>
        </div>
      
    </div>
  )
}

export default HomeSectionCard

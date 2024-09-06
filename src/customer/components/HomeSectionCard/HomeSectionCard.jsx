import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className=' cursor-pointer flex flex-col items-center 
    bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border'>

        <div className='h-[13rem] w-[10rem] '>
            {/* object cover: trim down part not above */}
            <img className='object-cover' src = "https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70"
            alt = ""/>

        </div>

        <div className='p-4'>
            <h3 className='text--lg font-medium text-gray-900'>Nofilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton Straight Kurta</p>
        </div>
      
    </div>
  )
}

export default HomeSectionCard

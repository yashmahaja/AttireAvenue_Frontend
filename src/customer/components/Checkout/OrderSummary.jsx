import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
    return (

    <div>
          <div className='p-5 shadow-lg rounded-s-md border'>
      <AddressCard/>
    </div>


<div>
<div className='lg:grid grid-cols-3  relative mt-5'>
  <div className='col-span-2 mr-20'>
    {[1,1,1,1].map((item) =>  <CartItem />)}
  </div>
  <div className='px-5 sticky top-0 h-[100-hv] mt-5 lg:mt-0'>
    <div className='border'>
      <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
      <hr />
      <div className='space-y-3 font-semibold'>
        <div className='flex justify-between pt-3 text-black'>
          <span>Price</span>
          <span>$4678</span>
        </div>
        <div className='flex justify-between pt-3 text-green-600'>
          <span>Discount</span>
          <span>-$678</span>
        </div>
        <div className='flex justify-between pt-3text-green-600'>
          <span>Delivery Charge</span>
          <span>Free</span>
        </div>

        <div className='flex justify-between pt-3 text-green-600'>
          <span>Total Amount</span>
          <span>$1278</span>
        </div>

      </div>
      <button className="mt-2 px-4 py-3.5 w-full py-0.7 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500" style={{ backgroundColor: '#915ffd' }}>
        Checkout
      </button>
    </div>
  </div>
</div>
</div>

    </div>

  
    )
}

export default OrderSummary

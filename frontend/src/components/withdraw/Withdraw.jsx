"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';



const Withdraw = () => {

    const handleToast = () => {
        // toast.success('You have successfully staked!')
        toast.error('Please enter a valid number!')
    }
  return (
    <div>
      <h1>Amount to Withdraw</h1>
      <input type="text" />

      <h2 className='ml-10 cursor-pointer mt-7 font-semibold' onClick={handleToast}>Withdraw your Stake</h2>
      <Toaster/>
    </div>
  )
}

export default Withdraw

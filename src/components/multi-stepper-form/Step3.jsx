import React from 'react'
import {motion} from 'framer-motion'

export const step3_req_data = {
    full_name : '',
    phone_number : '',
    email : '',
}

function Step3({step3Data , setStep3Data}) {
    function handleChange(text,name){
        setStep3Data(prev=>({
            ...prev,
            [name]:text
        }))
    }
  return (
    <motion.div initial={{x:'-100vw'}} animate={{x:'0vw',transition:{duration:.5}}} className="stepper_1 gap-4 flex  flex-col">

            <div className='flex flex-col gap-6'>
                <div className='border-b-2 border-gray-600'>
                    <h1 className='pb-1.5' >Your Details</h1>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-5">
                    <div className="flex flex-col col-span-2 gap-2">
                        <label htmlFor="full_name">Full Name</label>
                        <input  value={step3Data.full_name} onChange={e=>handleChange(e.target.value , 'full_name')}  required className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='full_name' id='full_name' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input  value={step3Data.phone_number} onChange={e=>handleChange(e.target.value , 'phone_number')}  required className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='phone_number' id='phone_number' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input  value={step3Data.email} onChange={e=>handleChange(e.target.value , 'email')}  required className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='email' id='email' />
                    </div>
                </div>
            </div>

        </motion.div>
  )
}

export default Step3
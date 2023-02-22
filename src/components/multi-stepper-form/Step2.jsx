import React from 'react'
import {motion} from 'framer-motion'

export const step2_req_data = {
    signers_full_name : '',
    signers_phone_number : '',
    email : '',
    company_name : '',
    agent_name : '',
    company_email : '',
    company_phone_number : '',
    escrow_loan_no : '',
    property_address : '',
}


function Step2({step2Data , setStep2Data}) {
    
    function handleChange(text,name){
        setStep2Data(prev=>({
            ...prev,
            [name]:text
        }))
    }
    return (
        <motion.div initial={{x:'-100vw'}} animate={{x:'0vw',transition:{duration:.5}}} className="stepper_1 gap-8 flex  flex-col">

            <div className='flex flex-col gap-6'>
                <div className='border-b-2 border-gray-600'>
                    <h1 className='pb-1.5' >Signer Details</h1>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="signers_full_name">Full Name</label>
                        <input required value={step2Data.signers_full_name} onChange={e=>handleChange(e.target.value , 'signers_full_name')} className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='signers_full_name' id='signers_full_name' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="signers_phone_number">Phone Number</label>
                        <input required value={step2Data.signers_phone_number} onChange={e=>handleChange(e.target.value , 'signers_phone_number')}  className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='signers_phone_number' id='signers_phone_number' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input required value={step2Data.email} onChange={e=>handleChange(e.target.value , 'email')}  className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='email' id='email' />
                    </div>
                </div>
            </div>

            

            <div className='flex flex-col gap-6'>
                <div className='border-b-2 border-gray-600'>
                    <h1 className='pb-1.5' >Title Company Details</h1>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="company_name">Company Name</label>
                        <input required value={step2Data.company_name} onChange={e=>handleChange(e.target.value , 'company_name')}  className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='company_name' id='company_name' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="agent_name">Agent Name</label>
                        <input required value={step2Data.agent_name} onChange={e=>handleChange(e.target.value , 'agent_name')}  className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='agent_name' id='agent_name' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input required value={step2Data.company_email} onChange={e=>handleChange(e.target.value , 'company_email')}  className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='email' id='email' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="signers_phone_number">Phone Number</label>
                        <input required value={step2Data.company_phone_number} onChange={e=>handleChange(e.target.value , 'company_phone_number')}  className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='signers_phone_number' id='signers_phone_number' />
                    </div>
                </div>
            </div>

            
            

            <div className='flex flex-col gap-6'>
                <div className='border-b-2 border-gray-600'>
                    <h1 className='pb-1.5' >Order Info</h1>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="escrow_loan_number">Escrow # / Loan No.</label>
                        <input required value={step2Data.escrow_loan_no} onChange={e=>handleChange(e.target.value , 'escrow_loan_no')}  className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='escrow_loan_number' id='escrow_loan_number' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="property_address">Property Address</label>
                        <input required value={step2Data.property_address} onChange={e=>handleChange(e.target.value , 'property_address')}  className='border-2 outline-none focus:border-4 focus:border-green-200 pl-1' type="text" name='property_address' id='property_address' />
                    </div>
                </div>
            </div>

            

        </motion.div>
    )
}

export default Step2
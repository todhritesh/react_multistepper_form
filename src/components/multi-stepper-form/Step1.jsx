import React from 'react'
import {motion} from 'framer-motion'

export const step1_req_data = {

    step1_select: [
        {
            title: 'Notary Signing Agent',
            descr: 'Suitable for those who purchased a brand new car.',
            isPopular: false,
            isSelected: false
        },
        {
            title: 'Remote Online Agent',
            descr: 'Suitable for those who already have third party cover.',
            isPopular: true,
            isSelected: true
        },
        {
            title: 'Mobile General Agent',
            descr: 'Suitable for thore who car infrequently',
            isPopular: false,
            isSelected: false
        },
    ],
    no_of_sign: '',
    no_of_files: '',
    no_of_signers: '',
    do_you_need_witness: ''

}


function Step1({ step1Data, setStep1Data }) {
    function handle_notary_click(i) {
        setStep1Data(prev => {
            const step1_select = prev.step1_select.map((item, index) => {
                if (i === index) {
                    return {
                        ...item,
                        isSelected: true
                    }
                }
                return {
                    ...item,
                    isSelected: false
                }
            })
            return {
                ...prev,
                step1_select
            }
        })
    }

    console.log(step1Data.no_of_files)

    function handleChange(text, name) {
        setStep1Data(prev => ({
            ...prev,
            [name]: text
        }))
    }
    return (
        <motion.div initial={{x:'-100vw'}} animate={{x:'0vw',transition:{duration:.5}}} className="stepper_1 overflow-auto items-center md:flex-row flex-col flex">

            <div className='w-6/12 my-4 flex gap-10 flex-col p-2' >
                {
                    step1Data.step1_select.map((item, i) => (
                        <div key={i} onClick={() => handle_notary_click(i)} className={`border-2 ring-2 rounded-lg flex items-center p-4 duration-200 cursor-pointer hover:bg-yellow-100 ${item.isSelected && 'bg-yellow-200'}`}>
                            <div className='' >
                                <p className="text-xl px-2 inline py-2 rounded-lg bg-pink-100">{item.title}</p>
                                <p className="text-red-400 leading-4 text-sm mt-5">{item.descr}</p>
                            </div>
                            <div>
                                {item.isPopular && <p>Popular</p>}
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='w-6/12 p-2 border-4' >
                <h3 className="text-xl my-4">CALCULATE YOUR COST FOR RON!</h3>
                <div className="fileds flex gap-4 flex-col">
                    <div className='flex w-full justify-between items-center p-2 gap-4 ' >
                        <div className='w-full' >
                            <p className="text-lg text-gray-800">No of Extra Signature</p>
                            <p className="text-sm">Please enter if only one signature is required</p>
                        </div>
                        <div className=''>
                            <input required value={step1Data.no_of_sign} onChange={(e) => handleChange(e.target.value, 'no_of_sign')} type="text" className='outline-none w-[100px] focus:border-green-200 pl-1 border-2 border-gray-300' />
                        </div>
                    </div>
                    <div className='flex w-full justify-between items-center p-2 gap-4 ' >
                        <div className='w-full' >
                            <p className="text-sm">How many files you will be uploading in the session.</p>
                        </div>
                        <div className=''>
                            <input required value={step1Data.no_of_files} onChange={(e) => handleChange(e.target.value, 'no_of_files')} type="text" className='outline-none w-[100px] focus:border-green-200 pl-1 border-2 border-gray-300' />
                        </div>
                    </div>
                    <div className='flex w-full justify-between items-center p-2 gap-4 ' >
                        <div className='w-full' >
                            <p className="text-sm">No of signers.</p>
                        </div>
                        <div className=''>
                            <input required value={step1Data.no_of_signers} onChange={(e) => handleChange(e.target.value, 'no_of_signers')} type="text" className='outline-none  focus:border-green-200 pl-1 w-[100px] border-2 border-gray-300' />
                        </div>
                    </div>
                    <div className='flex w-full justify-between items-center p-2 gap-4 ' >
                        <div className='w-full' >
                            <p className="text-lg text-gray-800">Do you need witness ?</p>
                            <p className="text-sm">Do not enter anything if you are bringing your own witness</p>
                        </div>
                        <div className=''>
                            <input value={step1Data.do_you_need_witness} onChange={(e) => handleChange(e.target.value, 'do_you_need_witness')} type="text" className=' focus:border-green-200 pl-1 outline-none w-[100px] border-2 border-gray-300' />
                        </div>
                    </div>
                    <div className='flex w-full justify-end p-2 gap-4 ' >
                        <h1 className="text-xl">Your Approximate Quote : $23</h1>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Step1
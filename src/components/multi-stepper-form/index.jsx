import React, { useEffect, useState } from 'react'
import { useMultiStepperForm } from '../../hooks/useMultiStepperForm'
import Success from '../success/Success'
import Step1, { step1_req_data } from './Step1'
import Step2, { step2_req_data } from './Step2'
import Step3, { step3_req_data } from './Step3'
import axios from 'axios'



function index() {
    const [step1Data , setStep1Data] = useState(step1_req_data)
    const [step2Data , setStep2Data] = useState(step2_req_data)
    const [step3Data , setStep3Data] = useState(step3_req_data)
    const [isSuccess , setIsSuccess] = useState()
    const { step , next , back , isLastStep , currentStepIndex , steps } = useMultiStepperForm([<Step1 step1Data={step1Data} setStep1Data={setStep1Data} />,<Step2 step2Data={step2Data} setStep2Data={setStep2Data} />,<Step3 step3Data={step3Data} setStep3Data={setStep3Data} />])

    function handleFinalSubmit(e) {
        e.preventDefault
        const data = {
            ...step1Data,
            nottory_type : step1Data.step1_select.filter(item=>item.isSelected),
            ...step2Data,
            ...step3Data
        }
        delete data.step1_select
        console.log(data)

        axios.post('https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails',data).then(res=>{
            setIsSuccess(res)
        }).catch(()=>alert("Something Went Wring :)"))
    }

    function handleSubmit(e) {
        e.preventDefault()
        next()
    }



    if(isSuccess){
        return (
            
            <Success data={isSuccess} />
        )
    }

    return (
        <form onSubmit={handleSubmit} >
        <div className="md:min-w-[700px] max-w-[700px] flex flex-col gap-4 overflow-auto p-4 border-2 rounded-lg border-gray-500 min-h-[800px]">
            <div className="flex md:flex-row flex-col md:justify-between md:items-start items-center">
                <div>
                    <h1 className="text-2xl text-black">New Appointment Request</h1>
                    <p className="text-md text-purple-400">Some great coverage for less.</p>
                </div>
                <div>
                    <p className="text-2xl">
                        Completed {currentStepIndex+1} / {steps.length}
                    </p>
                </div>
            </div>
            {step}
            {
                isLastStep ?
                <>
                <button type = "submit" onClick={handleFinalSubmit} className="rounded-lg px-4 py-2 bg-purple-400 text-white w-fit mx-auto hover:bg-purple-500 mt-10">Schedule Appointment</button>
                <button onClick={back}  className='bg-gray-400 px-4 py-2 rounded text-gray-50 w-fit mx-auto hover:text-white hover:bg-gray-600' >Back</button>
                </>
                :
                <>
                    <div className="grow"></div>
                    <div className="md:self-end flex self-center gap-4">
                        <button onClick={back} type="button"  className='bg-gray-400 px-4 py-2 rounded text-gray-50 hover:text-white hover:bg-gray-600' >Back</button>
                        <button type="submit" className='bg-green-500 px-4 py-2 rounded text-gray-100 hover:text-white hover:bg-green-600' >Next</button>
                    </div>
                </>
            }
        </div>
        </form>
    )
}

export default index
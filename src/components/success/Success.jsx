import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../assets/96237-success.json'



function Success({data}) {
    console.log(data)
    return (
        <div className="w-screen">
            <div className="container mx-auto flex flex-col items-center gap-4 h-screen justify-center">

                <div className=" h-[300px] w-[300px] flex">
                    <Lottie animationData={animationData}  loop={true} />
                </div>

                <div className="p-4  w-fit shadow-xl">
                    <span>
                        <p className="text-xl">Msg : {data.data.msg}</p>
                        <p className="text-xl">Status : {data.data.status}</p>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Success
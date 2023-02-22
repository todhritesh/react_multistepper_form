import { useState } from "react"

export const useMultiStepperForm = (steps=[]) => {
    const [currentStepIndex , setCurrentStepIndex] =  useState(0)

    function goTo(index) {
        setCurrentStepIndex(steps[index])
    }

    function next () {
        setCurrentStepIndex((i)=> {
            if(i>=steps.length-1) return i;
            return ++i
        })
    }

    function back () {
        setCurrentStepIndex((i)=> {
            if(i<= 0) return i;
            return --i
        })
    }

    return {
        currentStepIndex ,
        step : steps[currentStepIndex] ,
        steps ,
        isFirstStep : currentStepIndex === 0 ,
        isLastStep : currentStepIndex === steps.length-1 ,
        goTo , 
        next ,
        back

    }
}
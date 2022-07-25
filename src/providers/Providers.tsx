import { createContext } from "react";
import { SetStateAction } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { Dispatch } from "react";


export const BusinessFormContext = createContext({
    isGeneralEnquiryOn: false,
    setIsGeneralEnquiryOn: {} as Function
});

export const BusinessFormProvider = ({ children }: { children: ReactNode }) => {
    const [isGeneralEnquiryOn, setIsGeneralEnquiryOn] = useState(false)

    return (
        <BusinessFormContext.Provider value={{ isGeneralEnquiryOn, setIsGeneralEnquiryOn }}>
            {children}
        </BusinessFormContext.Provider>
    )
}



import { createContext } from "react";
import { SetStateAction } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { Dispatch } from "react";
import { SelectedProduct } from "../interfaces/interfaces";


export const BusinessFormContext = createContext({
    isGeneralEnquiryOn: false,
    selectedProduct: "",
    setSelectedProduct: {} as Function,
    setIsGeneralEnquiryOn: {} as Function
});

export const BusinessFormProvider = ({ children }: { children: ReactNode }) => {
    const [isGeneralEnquiryOn, setIsGeneralEnquiryOn] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState("");

    return (
        <BusinessFormContext.Provider value={{ isGeneralEnquiryOn, setIsGeneralEnquiryOn, selectedProduct, setSelectedProduct }}>
            {children}
        </BusinessFormContext.Provider>
    )
}
export const ModalContext = createContext({
    isPicturesModalOn: false,
    setIsPicturesModalOn: {} as Function,
    selectedProduct: {} as SelectedProduct,
    setSelectedProduct: {} as Function
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isPicturesModalOn, setIsPicturesModalOn] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({ productName: "", design: "", imgs: [] })

    return (
        <ModalContext.Provider value={{ isPicturesModalOn, setIsPicturesModalOn, selectedProduct, setSelectedProduct }}>
            {children}
        </ModalContext.Provider>
    )
}



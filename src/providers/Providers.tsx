import { createContext } from "react";
import { SetStateAction } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { Dispatch } from "react";
import { ModalResponseTxt, SelectedProduct } from "../interfaces/interfaces";


export const BusinessFormContext = createContext({
    isGeneralEnquiryOn: false,
    selectedProduct: "",
    viewProductName: "",
    setViewProductName: {} as Function,
    setSelectedProduct: {} as Function,
    setIsGeneralEnquiryOn: {} as Function
});

export const BusinessFormProvider = ({ children }: { children: ReactNode }) => {
    const [isGeneralEnquiryOn, setIsGeneralEnquiryOn] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState("");
    const [viewProductName, setViewProductName] = useState("")

    return (
        <BusinessFormContext.Provider value={{ isGeneralEnquiryOn, setIsGeneralEnquiryOn, selectedProduct, setSelectedProduct, viewProductName, setViewProductName }}>
            {children}
        </BusinessFormContext.Provider>
    )
}
export const ModalContext = createContext({
    isPicturesModalOn: false,
    isEmailResponseModalOn: false,
    emailResponseTxt: {} as ModalResponseTxt,
    selectedProduct: {} as SelectedProduct,
    setEmailResponseTxt: {} as Function,
    setIsEmailResponseModalOn: {} as Function,
    setIsPicturesModalOn: {} as Function,
    setSelectedProduct: {} as Function
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isPicturesModalOn, setIsPicturesModalOn] = useState(false);
    const [isEmailResponseModalOn, setIsEmailResponseModalOn] = useState(false);
    const [emailResponseTxt, setEmailResponseTxt] = useState({ header: "", body: "" });
    const [selectedProduct, setSelectedProduct] = useState({ productName: "", design: "", imgs: [] })

    return (
        <ModalContext.Provider value={{ isPicturesModalOn, setIsPicturesModalOn, selectedProduct, setSelectedProduct, isEmailResponseModalOn, setIsEmailResponseModalOn, emailResponseTxt, setEmailResponseTxt }}>
            {children}
        </ModalContext.Provider>
    )
}



import { createContext, useState } from "react"

export const ModalContext = createContext()

export const ModalContextProvider = ({children}) => {

    const [visibilityModal, setVisibilityModal] = useState(false)

    return (
        <ModalContext.Provider value={{visibilityModal, setVisibilityModal}}>
            {children}
        </ModalContext.Provider>
    )
}
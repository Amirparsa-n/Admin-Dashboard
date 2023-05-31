import React ,{createContext , useContext , useState} from "react";

export const stateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClick, setIsClick] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);


    const handleClick = (clicked) => setIsClick({... initialState , [clicked]: true});


    return(
        <stateContext.Provider 
        value={{
            activeMenu,
            setActiveMenu,
            isClick,
            setIsClick,
            isClick,
            handleClick,
            screenSize,
            setScreenSize,
            
        }}
        >
            {children}
        </stateContext.Provider>
    )
}

